
declare namespace mapboxgl {
  export class Map {
    constructor(options: MapOptions);
    addControl(control: Control, position?: string): this;
    on(type: string, listener: (ev: any) => void): this;
    remove(): void;
    getCenter(): { lng: number; lat: number };
    easeTo(options: any): this;
    getZoom(): number;
    scrollZoom: {
      disable(): void;
      enable(): void;
    };
    setFog(options: any): void;
  }

  export class NavigationControl implements Control {
    constructor(options?: { visualizePitch?: boolean });
    onAdd(map: mapboxgl.Map): HTMLElement;
    onRemove(map: mapboxgl.Map): void;
  }

  export class Marker {
    constructor(options?: any);
    setLngLat(lngLat: [number, number]): this;
    addTo(map: mapboxgl.Map): this;
  }

  export interface MapOptions {
    container: HTMLElement | string;
    style: string;
    center?: [number, number];
    zoom?: number;
    pitch?: number;
    projection?: string;
  }

  export interface Control {
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }

  export let accessToken: string;
}

interface Window {
  mapboxgl: typeof mapboxgl;
}
