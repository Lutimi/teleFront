<template>
   <v-data-table
    :headers="headers"
    :items="vehiculos"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Vehiculos</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field class="text-xs-center" v-model="search" 
        append-icon="search" label="Búsqueda de Vehiculos" 
        single-line hide-details></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
           <template v-slot:activator="{ on }">
            <v-btn color="blue darken-1" text v-on="on">Registrarse</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="placa" label="Placa"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="color" label="Color"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="fechafabricacion" label="FechaFabricacion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                   <v-text-field v-model="modeloId" label="ModeloId"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="12" md="12">
                     <v-text-field v-model="categoriaId" label="categoriaId"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="conductorId" label="conductorId"></v-text-field>
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
        <td>{{item.placa}}</td>
        <td>{{item.color}}</td>
        <td>{{ item.fechafabricacion }}</td>
        <td>{{item.conductorId}}</td>
        <td>{{item.categoriaId}}</td>
        <td>{{item.modeloId}}</td>
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
import { isDate } from 'util';
export default {
    data: () =>({
       dialog:false,
         headers: [
        { text: 'Placa', value: 'placa', sortable: false  },
        { text: 'Color', value: 'color', sortable: false  },
        { text: 'FechaFabricacion', value: 'fechafabricacion', sortable: false  },
        { text: 'CategoriaId', value: 'categoriaId', sortable: false  },
        { text: 'ModeloId', value: 'modeloId', sortable: false  },
        { text: 'ConductorId', value: 'conductorId', sortable: false  },
      ],

      search: '',
      vehiculoId: 0,
      conductorId: 0,
      categoriaId: 0,
      modeloId: 0,
      placa: '',
      color: '',
      fechafabricacion: '',
      direccion: '',
      correo: '',
      nombre:'',
      vehiculos: [],
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
        axios.get('api/vehiculoes/list')
        .then(function(response){
          me.vehiculos = response.data;
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
      this.vehiculoId="";
      this.placa="";
      this.color="";
      this.fechafabricacion="";
      this.correo="";
      this.conductorId="";
      this.categoriaId="";
      this.modeloIdId="";
      },
      save () {
        let me = this;
        if (this.editedIndex > -1) { // EDITAR REGISTRO
          axios.put('api/Categories/Update'+me.id,{
            'categoryId':me.id,
            'name':me.name,
            'description':me.description})
          .then(function(response){me.close();me.listar();me.clean()}).catch(function(error){console.log(error);})
        } else { // NUEVO REGISTRO
          axios.post('api/conductores/create',{
                    'placa':me.placa,
                    'color':me.color,
                    'fechafabricacion':me.fechafabricacion,
                    'direccion':me.direccion,
                    'correo':me.correo,
                    'conductorId':me.conductorId,
                    'categoriaId':me.categoriaId,
                    'modeloId':me.modeloId
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