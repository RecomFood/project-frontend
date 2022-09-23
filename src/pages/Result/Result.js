/* global kakao */
import React, { useEffect, useState } from "react";
import "./Result.css";

const Result = () => {
  const [lat, setLat] = useState(-1);
  const [lng, setLng] = useState(-1);
  const [map, setMap] = useState(-1);
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  // get GPS postion and set Positions
  const getPosition = async () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };
  const setLatLng = async function () {
    const pos = await getPosition();

    setLat(pos.coords.latitude);
    setLng(pos.coords.longitude);
  };

  // get distance function
  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  // keyword search
  const getPlaces = async function () {
    if (lat === -1) return;
    if (map === -1) return;
    const places = new kakao.maps.services.Places();
    const callback = function (res, status) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < res.length; i++) {
          let x = res[i].x;
          let y = res[i].y;

          let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(y, x),
          });

          kakao.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(
              `<div style=
              "width: 150px;
              display: flex; 
              padding: 5px;
              
              font-family: dotum, 돋움, sans-serif !important;
              font-size: 14px; 
              font-weight: bold;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              ">
                <a 
                style=
                "text-decoration: none;
                line-height: 30px;
                color: blue;
                " 
                href="${res[i].place_url}">${res[i].place_name}</a>
                <p 
                style=
                "margin: 0 0 6px;
                ">약 ${getDistanceFromLatLonInKm(y, x, lat, lng).toFixed(
                  2
                )}km</p>
              </div>`
            );
            infowindow.setPosition(new kakao.maps.LatLng(y, x));
            infowindow.open(map, marker);
          });
        }
      }
    };

    for (let i = 1; i < 3; i++) {
      const options = {
        location: new kakao.maps.LatLng(lat, lng),
        useMapCenter: true,
        page: i,
      };

      places.keywordSearch("김치찌개", callback, options);
    }
  };

  // initializing map
  useEffect(() => {
    setLatLng();
    const container = document.getElementsByClassName("map")[0];
    const options = { center: new kakao.maps.LatLng(lat, lng), level: 6 };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, [lat, lng]);

  // add controls
  useEffect(() => {
    if (map !== -1)
      map.addControl(
        new kakao.maps.ZoomControl(),
        kakao.maps.ControlPosition.RIGHT
      );
    getPlaces();
  }, [map]);

  return (
    <div className="mapWrapper">
      <div
        className="map"
        style={{
          width: "400px",
          height: "400px",
        }}
      ></div>
    </div>
  );
};

export default Result;
