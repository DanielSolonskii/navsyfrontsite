<template>
  <div style="display: none">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
  // import antPath from 'leaflet-ant-path'
  import L from 'leaflet'
  import {
    IRouter,
    IGeocoder,
    LineOptions
  } from 'leaflet-routing-machine'
  import {
    findRealParent
  } from 'vue2-leaflet';

  const props = {
    visible: {
      type: Boolean,
      default: true
    },
    waypoints: {
      type: Array,
      required: true
    },
    router: {
      type: IRouter
    },
    plan: {
      type: L.Routing.Plan
    },
    geocoder: {
      type: IGeocoder
    },
    fitSelectedRoutes: {
      type: [String, Boolean],
      default: 'smart'
    },
    lineOptions: {
      type: LineOptions
    },
    routeLine: {
      type: Function
    },
    autoRoute: {
      type: Boolean,
      default: true
    },
    routeWhileDragging: {
      type: Boolean,
      default: false
    },
    routeDragInterval: {
      type: Number,
      default: 500
    },
    waypointMode: {
      type: String,
      default: 'connect'
    },
    useZoomParameter: {
      type: Boolean,
      default: false
    },
    showAlternatives: {
      type: Boolean,
      default: false
    },
    altLineOptions: {
      type: LineOptions
    }
  }
  // test
  // const optionTestNames = [
  //   'router',
  //   'plan',
  //   'geocoder',
  //   'lineOptions',
  //   'routeLine',
  //   'altLineOptions'
  // ]

  export default {
    props,
    name: 'LRoutingMachine',

    data() {
      return {
        parentContainer: null,
        ready: false,
        layer: null,
        routingLayer: null
      }
    },
    mounted() {
      this.parentContainer = findRealParent(this.$parent)
      this.add()
      this.ready = true
      console.log(this.lineOptions)
    },
    watch: {
      waypoints: {
        // immediate: true,
        deep: true,
        handler(newValue) {
          // console.log('test' + newValue)
          this.routingLayer.setWaypoints(newValue)
        },
      },
      // lineOptions: {
      //   immediate: true,
      //   deep: true,
      //   handler(newValue) {
      //     console.log('test leneoptions' + newValue)
      //     // this.routingLayer.lineOptions(newValue)
      //   },
      // }
    },
    beforeDestroy() {
      return this.layer ? this.layer.remove() : null
    },
    methods: {
      add() {
        if (this.parentContainer._isMounted) {
          let {
            waypoints,
            fitSelectedRoutes,
            autoRoute,
            lineOptions,
            routeWhileDragging,
            routeDragInterval,
            waypointMode,
            useZoomParameter,
            showAlternatives
          } = this

          let options = {
            lineOptions,
            waypoints,
            fitSelectedRoutes,
            autoRoute,
            routeWhileDragging,
            routeDragInterval,
            waypointMode,
            useZoomParameter,
            showAlternatives
          }

          let {
            mapObject
          } = this.parentContainer
          this.routingLayer = L.Routing.control(options)
          console.log(this.routingLayer)
          // test
          // let path = antPath(this.routingLayer, {
          //   "paused": false, //??????  ???????????????
          //   "reverse": false, //????????????
          //   "delay": 3000, //????????????????????????????????????
          //   "dashArray": [10, 20], //????????????
          //   "weight": 5, //??????
          //   "opacity": 0.5, //?????????
          //   "color": "#0000FF", //??????
          //   "pulseColor": "#FFFFFF" //?????????
          // });
          // path.addTo(mapObject);
          // test
          this.routingLayer.addTo(mapObject)
          this.layer = this.routingLayer
        }
      }
    }
  }
</script>

<style>
  @import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
</style>