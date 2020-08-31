<template>
  <v-data-table
    :headers="headers"
    :items="marcas"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Marcas</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field class="text-xs-center" v-model="search" 
        append-icon="search" label="Búsqueda de Marcas" 
        single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Agregar</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="nombre" label="Nombre"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.nombre }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            delete
          </v-icon>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="listar">Resetear</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'Nombre', value: 'nombre', sortable: true },
      ],
      search: '',
      marcaId: '',
      nombre: '',
      marcas: [],
      editedIndex: -1,
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Marca' : 'Editar Marca'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.listar();
    },
    methods: {
      listar(){
        let me = this;
        axios.get('api/Marcas/List')
        .then(function(response){
          //console.log(response);
          me.marcas = response.data;
        }).catch(function(error){
          console.log(error);
        });
      },
      editItem (item) {
        this.id = item.marcaId;
        this.nombre = item.nombre;
        this.editedIndex=1;        
        this.dialog = true
      },
      deleteItem (item) {
        let me = this;        
        if(confirm('Estimado Pulpin, estás seguro que quieres eliminar esta categoría?'))
        axios.delete('api/Marcas/Delete/'+item.marcaId,{
                     'id': item.marcaId
          }).then(function(response){
            console.log(item.id);
            me.close();
            me.listar();
            me.clean();
          }).catch(function(error){
            console.log(error);
          });
      },
      close () {
        this.dialog = false
      },
      clean(){
        this.id="";
        this.nombre="";
      },
      save () {
        let me = this;
        if (this.editedIndex > -1) { //Editar registro
          axios.put( 'api/Marcas/Update/'+me.id,{
                     'marcaId': me.id,
                     'nombre': me.nombre,
          }).then(function(response){
            me.close();
            me.listar();
            me.clean();
          }).catch(function(error){
            console.log(error);
          });
        } else { //Nuevo registro
          axios.post('api/Marcas/Create',{
                     'nombre': me.nombre,
          }).then(function(response){
            me.close();
            me.listar();
            me.clean();
          }).catch(function(error){
            console.log(error);
          });
        }
        this.close()
      },
    },
  }
</script>
