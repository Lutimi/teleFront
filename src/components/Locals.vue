<template>
  <v-data-table
    :headers="headers"
    :items="locals"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Locales</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field class="text-xs-center" v-model="search" 
        append-icon="search" label="Búsqueda de Locales" 
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
                    <v-text-field v-model="direccion" label="Direccion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="horarioId" label="HorarioId"></v-text-field>
                  </v-col>      
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="empresaId" label="EmpresaId"></v-text-field>
                  </v-col>    
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="distritoId" label="DistritoId"></v-text-field>
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
        <td>{{ item.direccion }}</td>
        <td>{{ item.horarioId }}</td>
        <td>{{ item.empresaId }}</td>
        <td>{{ item.distritoId }}</td>
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
        { text: 'Direccion', value: 'direccion', sortable: true },
        { text: 'HorarioId', value: 'horarioId', sortable: false },
        { text: 'EmpresaId', value: 'empresaId', sortable: true },
        { text: 'DistritoId', value: 'distritoId', sortable: false },
      ],
      search: '',
      localId: '',
      direccion: '',
      horarioId: '',
      empresaId: '',
      distritoId: '',
      locals: [],
      editedIndex: -1,
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo Local' : 'Editar Local'
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
        axios.get('api/Locals/List')
        .then(function(response){
          //console.log(response);
          me.locals = response.data;
        }).catch(function(error){
          console.log(error);
        });
      },
      editItem (item) {
        this.id = item.localid;
        this.direccion = item.direccion;
        this.horarioId = item.horarioId;
        this.empresaId = item.empresaId;
        this.distritoId = item.distritoId;
        this.editedIndex=1;        
        this.dialog = true
      },
      deleteItem (item) {
        let me = this;        
        if(confirm('Estimado Pulpin, estás seguro que quieres eliminar esta categoría?'))
        axios.delete('api/Locals/Delete/'+item.localId,{
                     'id': item.localId
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
        this.direccion="";
        this.horarioId="";
        this.empresaId="";
        this.distritoId="";
      },
      save () {
        let me = this;
        if (this.editedIndex > -1) { //Editar registro
          axios.put( 'api/Locals/Update/'+me.id,{
                     'localId': me.id,
                     'direccion': me.direccion,
                     'horarioId': me.horarioId,
                     'empresaId': me.empresaId,
                     'distritoId': me.distritoId
          }).then(function(response){
            me.close();
            me.listar();
            me.clean();
          }).catch(function(error){
            console.log(error);
          });
        } else { //Nuevo registro
          axios.post('api/Locals/Create',{
                     'direccion': me.direccion,
                     'horarioId': me.horarioId,
                     'empresaId': me.empresaId,
                     'distritoId': me.distritoId
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
