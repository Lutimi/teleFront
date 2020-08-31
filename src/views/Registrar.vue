<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Registrarse.</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    v-model="correo"
                    prepend-icon="email"
                    type="text"
                  />
                 <v-text-field
                    label="Nombre"
                     v-model="nombre"
                    prepend-icon="face"
                    type="text"
                  />
                  <v-text-field
                    label="Apellido"
                     v-model="apellido"
                    prepend-icon="person_pin"
                    type="text"
                  />
                  <v-text-field
                    label="Celular"
                     v-model="celular"
                    prepend-icon="settings_cell"
                    type="text"
                  />
                  <v-text-field
                    label="DNI"
                     v-model="dni"
                    prepend-icon="fingerprint"
                    type="text"
                  />
                  <v-text-field
                    label="Direccion"
                     v-model="direccion"
                    prepend-icon="map"
                    type="text"
                  />
                  
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="save">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>



<script>
import axios from 'axios'
export default {
   props: {
      source: String,
    },
    data: () =>({
       dialog:false,
         headers: [
        { text: 'Nombre', value: 'nombre', sortable: false  },
        { text: 'Apellido', value: 'apellido', sortable: false  },
        { text: 'Dni', value: 'dni', sortable: false  },
        { text: 'Direccion', value: 'direccion', sortable: false  },
        { text: 'Celular', value: 'celular', sortable: false  },
        { text: 'Correo', value: 'correo', sortable: false  },
      ],
      search: '',
      // ReservaId
      conductorId: 0,
      // VehiculoId
      nombre: '',
      // dniId
      apellido: '',
      // PagoAdelantadoId
      dni: '',
      // ReservaEstadoId
      direccion: '',
      // Fecha
      celular: '',
      // Hora
      correo: '',
      conductores: [],
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
        axios.get('api/conductores/list')
        .then(function(response){
          me.conductores = response.data;
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
      this.apellido="";
      this.dni="";
      this.direccion="";
      this.celular="";
      this.correo="";
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
                    'nombre':me.nombre,
                    'apellido':me.apellido,
                    'dni':me.dni,
                    'direccion':me.direccion,
                    'celular':me.celular,
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