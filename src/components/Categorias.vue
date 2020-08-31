<template>
  <v-data-table
    :headers="headers"
    :items="categorias"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Categorías</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field class="text-xs-center" v-model="search" 
        append-icon="search" label="Búsqueda de Categorías" 
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
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="descripcion" label="Descripcion"></v-text-field>
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
        <td>{{ item.descripcion }}</td>
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
        { text: 'Descripcion', value: 'descripcion', sortable: false },
      ],
      search: '',
      categoriaId: '',
      nombre: '',
      descripcion: '',
      categorias: [],
      editedIndex: -1,
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Categoría' : 'Editar Categoría'
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
        axios.get('api/Categorias/List')
        .then(function(response){
          //console.log(response);
          me.categorias = response.data;
        }).catch(function(error){
          console.log(error);
        });
      },
      editItem (item) {
        this.id = item.categoriaId;
        this.name = item.nombre;
        this.description = item.descripcion;
        this.editedIndex=1;        
        this.dialog = true
      },
      deleteItem (item) {
        let me = this;        
        if(confirm('Estimado Pulpin, estás seguro que quieres eliminar esta categoría?'))
        axios.delete('api/Categorias/Delete/'+item.categoriaId,{
                     'id': item.categoriaId
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
        this.descripcion="";
      },
      save () {
        let me = this;
        if (this.editedIndex > -1) { //Editar registro
          axios.put( 'api/Categorias/Update/'+me.id,{
                     'categoriaId': me.id,
                     'nombre': me.nombre,
                     'descripcion': me.descripcion
          }).then(function(response){
            me.close();
            me.listar();
            me.clean();
          }).catch(function(error){
            console.log(error);
          });
        } else { //Nuevo registro
          axios.post('api/Categorias/Create',{
                     'nombre': me.nombre,
                     'descripcion': me.descripcion
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
