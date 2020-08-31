<template

>
<div class="ReservarAhora">

    <v-card mx-5 color="secondary lighten-2">
        <v-img class="align-center" src="../assets/8.png" max-height="200">
            <v-card-subtitle class="display-3 info--text text-center text-uppercase">Reservar cita.</v-card-subtitle>
            <v-card-text class="white--text text-center ">Ahorra tiempo, reserva una cita en el servicio tecnico.</v-card-text>
        </v-img>
    </v-card>
    
        
    
<v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Informacion del Usuario</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step :complete="e1 > 2" step="2">Vehiculo</v-stepper-step>
  
        <v-divider></v-divider>
  
        <v-stepper-step :complete="e1 > 3" step="3">Ubicacion</v-stepper-step>

        <v-divider></v-divider>
  
        <v-stepper-step step="4">Metodo de Pago</v-stepper-step>
      </v-stepper-header>
  
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card 
            class="mb-12"
            color="accent lighten-1"
          >
          <v-row no-gutters>
            <v-col>
                <v-card flat color="accent lighten-1">
                <div class="d-flex flex-no-wrap justify-space-between" color="accent">
                <v-card class="ml-10 my-10" >
                    <v-card-title>Complete los siguientes campos para comenzar con su reserva.</v-card-title>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="mx-5">
                        <v-text-field v-model="nombre" required label="Nombre *"></v-text-field>
                        <v-text-field v-model="apellido" required label="Apellido *"></v-text-field>
                        <v-text-field v-model="dni" required label="DNI *"></v-text-field>
                        <v-text-field v-model="celular" required label="Telefono *"></v-text-field>
                        <v-text-field v-model="correo" required label="Email *"></v-text-field>
                        <v-text-field v-model="direccion" label="Direccion"></v-text-field>
                    </v-form>
                </v-card>
                <div>
                <v-card flat color="accent lighten-1" class="mx-10 my-10">
                <v-img src="../assets/car.png"></v-img>
                </v-card>
                </div>
                </div>
            </v-card>
        </v-col>
        </v-row></v-card>
  
          <v-btn
            color="primary"
            text
            @click="save"
          >
            Guardar
          </v-btn>
    <v-btn
            color="primary"
             @click="e1 = 2"
            :disabled="!valid"
          >
            Siguiente
          </v-btn>
  
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
  
        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="accent lighten-1"
          >
          <v-row no-gutters>
            <v-col>
                <v-card flat color="accent lighten-1">
                <div class="d-flex flex-no-wrap justify-space-between" color="accent">
                <v-card class="ml-10 my-10" >
                    <v-card-title>Complete los siguientes campos para continuar con su reserva.</v-card-title>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="mx-5">
                        <v-text-field v-model="placa" required label="Placa *"></v-text-field>
                        <v-text-field v-model="color"  required label="Color *"></v-text-field>
                        <v-text-field v-model="fechafabricacion" required label="Fecha de Fabricacion *"></v-text-field>
                        <v-combobox v-model="conductorId" :items="listaconductores" required label="conductor ID*"></v-combobox>
                         <v-combobox  v-model="categoriaId" :items="listacategorias" label="Selecciona una Categoria."></v-combobox>
                        <!--v-text-field v-model="modeloId" required label="Modelo *"></v-text-field-->
                        <v-combobox   v-model="modeloId" :items="listamodelos" label="Selecciona un Modelo."></v-combobox>



                    </v-form>
                </v-card>
                <div>
                <v-card flat color="accent lighten-1" class="mx-10 my-10">
                <v-img src="../assets/car.png"></v-img>
                </v-card>
                </div>
                </div>
            </v-card>
        </v-col>
        </v-row>
          </v-card>

          <v-btn
            color="primary"
            text
            @click="saveVehiculo"
          >
            Guardar
          </v-btn>
          <v-btn
            color="primary"
            @click="e1 = 3;save"
            :disabled="!valid">
            Siguiente
          </v-btn>
  
          <v-btn text @click="e1 = 1">Cancel</v-btn>
          <v-data-table
    :headers="headers"
    :items="conductores"
    :search="search"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Conductores</v-toolbar-title>
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
                    <v-text-field v-model="nombre" label="Nombre"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="apellido" label="Apellido"></v-text-field>
                  </v-col>
                    <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="dni" label="Dni"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="direccion" label="Direccion"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="celular" label="Celular"></v-text-field>
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
        <td>{{item.apellido}}</td>
        <td>{{item.dni}}</td>
        <td>{{item.direccion}}</td>
        <td>{{item.celular}}</td>
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
        </v-stepper-content>
  
        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="accent lighten-1"
          >
          <v-row no-gutters>
            <v-col>
                <v-card flat color="accent lighten-1">
                <div class="d-flex flex-no-wrap justify-space-between" color="accent">
                <v-card class="ml-10 my-10" >
                    <v-card-title>Complete los siguientes campos para continuar con su reserva.</v-card-title>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="mx-5">
                        <!--v-combobox v-model="select" :items="distrito" label="Selecciona un distrito."></v-combobox>
                        <v-text-field v-model="nombre" :rules="dirRules" required label="Direccion *"></v-text-field>
                        <v-combobox v-model="select" :items="empresa" label="Selecciona una empresa."></v-combobox>
                        <v-text-field v-model="celular" :rules="telfRules" required label="Horario *"></v-text-field-->
                        <v-text-field v-model="direccion" required label="Direccion del Local*"></v-text-field>
                        <v-text-field v-model="horarioId" required label="Horario ID *"></v-text-field>
                        <v-text-field v-model="empresaId" required label="Empresa ID *"></v-text-field>
                        <v-text-field v-model="distritoId" required label="Distrito ID *"></v-text-field>
                        <!--v-combobox v-model="distritoId" :items="listadistritos" required label="Distrito *"></v-combobox>
                        <v-combobox v-model="empresaId" :items="lsitaempresas" required label="Empresa *"></v-combobox>
                        <v-combobox v-model="horarioId" :items="listahorarios"  required label="Horario *"></v-combobox-->
                    </v-form>
                </v-card>
                <div>
                <v-card flat color="accent lighten-1" class="mx-10 my-10">
                <v-img src="../assets/car.png"></v-img>
                </v-card>
                </div>
                </div>
            </v-card>
        </v-col>
        </v-row>
          </v-card>
          <v-btn
            color="primary"
            text
            @click="saveLocal"
          >
            Guardar
          </v-btn>
          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Siguiente
          </v-btn>
  
          <v-btn text @click="e1 = 2">Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card
            class="mb-12"
            color="accent lighten-1"
          ></v-card>
         <v-row no-gutters>
            <v-col>
                <v-card flat color="accent lighten-1">
                <div class="d-flex flex-no-wrap justify-space-between" color="accent">
                <v-card class="ml-10 my-10" >
                    <v-card-title>Complete los siguientes campos para finalizar con su reserva.</v-card-title>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="mx-5">
                        <v-text-field label="1: Parcial -- 2: Completo"></v-text-field>
                        <v-combobox v-model="pagoAdelantadoId" :items="pagosLista" label="Selecciona un metodo de pago."></v-combobox>
                    </v-form>
                </v-card>
                <div>
                <v-card flat color="accent lighten-1" class="mx-10 my-10">
                <v-img src="../assets/car.png"></v-img>
                </v-card>
                </div>
                </div>
            </v-card>
        </v-col>
        </v-row>
        <v-btn
            color="primary"
            text
            @click="saveReserva"
          >
            Guardar
          </v-btn>
          <v-btn
            color="primary"
            @click="snackbar=true"
          >
            Finalizar
          </v-btn>
  
          <v-btn text @click="e1 = 3">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

    <v-snackbar v-model="snackbar" :vertical="vertical" >Te has registrado con éxito.
      <v-btn color="accent lighten-1" text @click="snackbar=false"></v-btn>
    </v-snackbar>
</div>
</template>


<script>
  import axios from 'axios'

export default {

  data: () => ({
     snackbar:false,
     vertical:true,
     dialog:false,
    headers: [
        { text: 'Nombre', value: 'nombre', sortable: false  },
        { text: 'Apellido', value: 'apellido', sortable: false  },
        { text: 'Dni', value: 'dni', sortable: false  },
        { text: 'Direccion', value: 'direccion', sortable: false  },
        { text: 'Celular', value: 'celular', sortable: false  },
        { text: 'Correo', value: 'correo', sortable: false  },
      ],
      e1: 0,
      search: '',
      nombre: ' ',
      apellido: ' ',
      dni: ' ',
      direccion: 'Av.Primavera',
      celular: ' ',
      correo: '',


      placa:'',
      color:'',
      fechafabricacion: '',
      categoriaId: 1,
      conductorId: 1,
      modeloId: 1,
      listacategorias: [1,2],
      listamodelos: [1,2],
      listaconductores: [1,2],

      modelos: [],
      
      // local
      direccionLocal: 'local',
      horarioId:1,
      empresaId:1,
      distritoId:1,
      // pago adelantado
      pagos:[],
      pagosLista:[1,2],
      pagosPrecio:['30%','100%'],

      // reserva
      fechaReserva:'',
      horaReserva:'',
      observacionesReserva:'',
      pagoAdelantadoId:1,
      reservaEstadoId:1,
      localId:2,
      vehiculoId:1,
      //vehiculoid
      //localid
      //pagoadelantadoid
      //reservaestadoid

      conductores: [],
      editedIndex: -1,
    valid: true,
    cpago:[
        '30% del total',
        'Total'

    ],
    mpago:[
        '0 marcaa',
        'Mastercard',
        'American Express',
        'Efectivo',
    ],
    modelo: [
        'Moto',
        'Camion',
        'Automovil',
        'Trailer',
        'Bus',
        'Motolineal',
      ],
    empresa:[],
    distrito:[
        'Ancon', 'Ate Vitarte', 'Barranco',
        'Breña', 'Carabayllo', 'Chaclacayo',
        'Chorrillos', 'Cieneguilla', 'Comas',
        'El Agustino', 'Huaycan', 'Independencia',
        'Jesus maria', 'La Molina', 'La Victoria', 'Lima',
        'Lince', 'Los Olivos', 'Lurigancho',
        'Lurin', 'Magdalena del mar', 'Miraflores',
        'Pachacamac', 'Pucusana', 'Pueblo Libre',
        'Puente Piedra', 'Punta Hermosa', 'Punta Negra',

    ],

    nameRules: [
      v => !!v || 'Nombre es requirido',
    ],
    lastnameRules: [
      v => !!v || 'Apellido es requirido',
    ],
    dniRules: [
      v => !!v || 'DNI es requirido',
    ],
    telfRules: [
      v => !!v || 'Telefono es requirido',
    ],
    colRules: [
      v => !!v || 'Color es requirido',
    ],
    fechaRules: [
      v => !!v || 'Fecha es requirido',
    ],
    placaRules: [
      v => !!v || 'Placa es requirido',
    ],
    pRules: [
      v => !!v || 'Precio es requirido',
    ],
    dirRules: [
      v => !!v || 'Direccion es requirido',
    ],
    select: null,
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
      this.listarModelos();
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
      listarModelos(){
        let me = this;
        axios.get('api/modeloes/list')
        .then(function(response){
          me.modelos = response.data;
        }).catch(function(error){
          console.log(error);
        });
      },
      listarPagos(){
        let me = this;
        axios.get('api/pagoadelantados/list')
        .then(function(response){
          me.pagos = response.data;
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
                    'correo':me.correo,            
                   }).then(function(response){
                    }).catch(function(error){
                      console.log(error);
                      
                      })
        }
        this.close()
      },
      saveVehiculo(){
         let me = this;
          axios.post('api/vehiculoes/create',{
                    'placa':me.placa,
                    'color':me.color,
                    'fechafabricacion':me.fechafabricacion,
                    'conductorId':me.conductorId,
                    'categoriaId':me.categoriaId,
                    'modeloId':me.modeloId
                    }).then(function(response){
                    }).catch(function(error){
                      console.log(error);
                      })
        
        this.close()

      },
      saveLocal(){
         let me = this;
          axios.post('api/locals/create',{
                    'direccion':me.direccion,
                    'horarioId':me.horarioId,
                    'empresaId':me.empresaId,
                    'distritoId':me.distritoId
                    }).then(function(response){
                      me.close();
                      me.listar();
                      me.clean()
                    }).catch(function(error){
                      console.log(error);
                      })
        
        this.close()

      },
      saveReserva(){
         let me = this;
          axios.post('api/reservas/create',{
                    'fecha':me.fechaReserva,
                    'hora':me.horaReserva,
                    'observaciones':me.observacionesReserva,
                    'vehiculoId':me.vehiculoId,
                    'localId':me.localId,
                    'pagoAdelantadoId':me.pagoAdelantadoId,
                    'reservaEstadoId':me.reservaEstadoId,
                    }).then(function(response){
                      me.close();
                      me.listar();
                      me.clean()
                    }).catch(function(error){
                      console.log(error);
                      })
        
        this.close()

      },
    },
}
</script>