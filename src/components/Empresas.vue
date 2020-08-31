<template>
   <v-data-table
    :headers="headers"
    :items="empresas"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Empresas</v-toolbar-title>
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
            <v-btn color="blue darken-1" text v-on="on">Agregar</v-btn>
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
                    <v-text-field v-model="ruc" label="Ruc"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="telefono" label="Telefono"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="correo" label="Correo"></v-text-field>
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
        <td>{{item.nombre}}</td>
        <td>{{item.ruc}}</td>
        <td>{{item.telefono}}</td>
        <td>{{item.correo}}</td>
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
    data: () =>({
       dialog:false,
         headers: [
        { text: 'Nombre', value: 'nombre', sortable: false  },
        { text: 'Ruc', value: 'ruc', sortable: false  },
        { text: 'Telefono', value: 'telefono', sortable: false  },
        { text: 'Correo', value: 'correo', sortable: false  },
      ],
      search: '',
      empresaId: 0,
      nombre: '',
      ruc: '',
      telefono: '',
      correo: '',
      empresas: [],
      editedIndex: -1,
    }),
      watch: {
      dialog (val) {
        val || this.close()
      },
    },
    computed: {
      formTitle () {
        return this.editedIndex == -1 ? 'Nuevo Conductor' : 'Editar Conductor'
      },
    },
    created () {
      this.listar();
      this.initialize();
    },
    methods: {
      initialize () {
        
      },
        // SE VA A LISTAR TODAS LAS RESERVAS DISPONIBLES PARA UN DETERMINADO DIA
      listar(){
        let me = this;
        axios.get('api/empresas/list')
        .then(function(response){
          me.empresas = response.data;
        }).catch(function(error){
          console.log(error);
        });
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      clean(){
      this.conductorId="";
      this.nombre="";
      this.ruc="";
      this.telefono="";
      this.correo="";
      },
      save () {
        let me = this;
        if (this.editedIndex > -1) { // EDITAR REGISTRO
          axios.put('api/empresas/Update'+me.id,{
            'categoryId':me.id,
            'name':me.name,
            'description':me.description})
          .then(function(response){me.close();me.listar();me.clean()}).catch(function(error){console.log(error);})
        } else { // NUEVO REGISTRO
          axios.post('api/empresas/create',{
                    'nombre':me.nombre,
                    'ruc':me.ruc,
                    'telefono':me.telefono,
                    'correo':me.correo
                    }).then(function(response){
                      me.close();
                      me.listar();
                      me.clean()
                    }).catch(function(error){
                      console.log(error);
                      })
        }
        this.close()
      },
    },
}
</script>