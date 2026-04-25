import React, { useEffect, useRef } from "react";
import "./Map.css";
import pictorialLogo from '../Assets/Img/pictorial-logo.svg';

function Map() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return; // Prevent double initialization

    // Initialize map centered on Egypt
    const L = window.L;
    if (!L) return;

    mapInstance.current = L.map(mapRef.current).setView([30.0444, 31.2357], 6);

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: 'Map data &copy; Google'
    }).addTo(mapInstance.current);

    // Custom Pictorial Logo Icon
    const customIcon = L.icon({
      iconUrl: pictorialLogo,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Sample Stations
    const stations = [
      { name: "Cairo Central Station", coords: [30.0444, 31.2357] },
      { name: "Alexandria Coastal Station", coords: [31.2001, 29.9187] },
      { name: "New Cairo Hub", coords: [30.0074, 31.4913] },
      { name: "6th of October Station", coords: [29.9723, 30.9388] }
    ];

    stations.forEach(station => {
      L.marker(station.coords, { icon: customIcon })
        .addTo(mapInstance.current)
        .bindPopup(`<b>${station.name}</b><br/>Ready for charging.`);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="map-wrapper">
      <div id="leaflet-map" ref={mapRef} className="real-map"></div>
    </div>
  );
}

export default Map;