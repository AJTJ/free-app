import { proxy } from "valtio";
import { GeoJSON } from "geojson";

interface MapState {
  geoList: GeoJSON[];
}

export const mapStore = proxy<{
  mapState?: MapState;
}>({});

export const addmapState = (mapState: MapState) => {
  mapStore.mapState = mapState;
};

export const emptymapState = () => {
  mapStore.mapState = undefined;
};
