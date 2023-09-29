import { useEffect, useRef } from "react";
import styled from "styled-components";
import Siwoo_face from "../../images/siwoo-face-modified.png";
import Siwoo_face_2 from "../../images/siwoo_2-modified.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LocationContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 40px 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

declare global {
  interface Window {
    naver: any;
  }
}

const LocationTitle = styled.div`
  font-size: 50px;
  margin-bottom: 30px;
  text-align: center;
`;

const AddressContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  div {
    display: flex;
    justify-content: center;
  }
`;

const AddressTitle = styled.div`
  left: 70px;
  background-color: black;
  color: white;
  position: absolute;
  padding: 5px 20px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

const Address = styled.div`
  width: 100%;
  border-radius: 15px;
  border: 2px solid black;
  padding: 20px 10px;
  text-align: center;
  font-size: 5.1vw;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  div:last-child {
    margin-top: 10px;
    font-size: 15px;
    color: gray;
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: -2px;
  right: 10px;
`;

const CopyBtn = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const LocationBtn = styled.div`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 5px;
`;

const MapContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  position: relative;
  margin-top: 50px;
`;

const MapTitle = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -100%);
  z-index: 997;
  font-size: 30px;
  background-color: black;
  color: white;
  padding: 2px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 3px solid black;
`;

export default function Location() {
  const mapRef: any = useRef(null);
  const restaurantMarker: any = useRef(null);
  const parkingMarker: any = useRef(null);
  const restaurantInfo: any = useRef(null);
  const parkingInfo: any = useRef(null);
  const restaurantPosition = new window.naver.maps.LatLng(
    35.8475909,
    128.6256759
  );
  const parkingPosition = new window.naver.maps.LatLng(35.8468122, 128.6253642);
  const initMap = () => {
    var map = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(35.8475909, 128.6256759),
      zoom: 15,
    });

    var restaurantMarkerOptions = {
      position: restaurantPosition,
      map: map,
      icon: {
        content:
          "<div><div style='display:flex; align-items:center; flex-direction:column; justify-content:center; cursor:pointer;'><img src=" +
          Siwoo_face +
          ' alt="" style="margin: 0px; padding: 0px; border: 1px solid black; border-radius:50%; display: block; max-width: none; max-height: none; -webkit-user-select: none; width: 50px; height: 50px; left: 0px; top: 0px;"/>' +
          "<div style='top:-3px;z-index:-1;position:relative;width:0;height: 0;border-bottom: 10px solid transparent;border-top: 10px solid black;border-left: 10px solid transparent;border-right: 10px solid transparent;'></div></div></div>",
        size: new window.naver.maps.Size(50, 50),
        origin: new window.naver.maps.Point(0, 0),
        anchor: new window.naver.maps.Point(25, 60),
      },
    };

    var parkingMarkerOptions = {
      position: parkingPosition,
      map: map,
      icon: {
        content:
          "<div><div style='display:flex; align-items:center; flex-direction:column; justify-content:center; cursor:pointer;'><img src=" +
          Siwoo_face_2 +
          ' alt="" style="margin: 0px; padding: 0px; border: 1px solid black; border-radius:50%; display: block; max-width: none; max-height: none; -webkit-user-select: none; width: 50px; height: 50px; left: 0px; top: 0px;"/>' +
          "<div style='top:-3px;z-index:-1;position:relative;width:0;height: 0;border-bottom: 10px solid transparent;border-top: 10px solid black;border-left: 10px solid transparent;border-right: 10px solid transparent;'></div></div></div>",
        size: new window.naver.maps.Size(50, 50),
        origin: new window.naver.maps.Point(0, 0),
        anchor: new window.naver.maps.Point(25, 60),
      },
    };
    var restaurantInfoWindow = new window.naver.maps.InfoWindow({
      content:
        '<div style="width:100px;text-align:center;padding:10px;"><b>여기는 식당</b></div>',
    });
    var parkingInfoWindow = new window.naver.maps.InfoWindow({
      content:
        '<div style="width:120px;text-align:center;padding:10px;"><b>여기는 주차장</b></div>',
    });

    const restaurantMarkerInit = new window.naver.maps.Marker(
      restaurantMarkerOptions
    );
    restaurantInfoWindow.open(map, restaurantMarkerInit);
    const parkingMarkerInit = new window.naver.maps.Marker(
      parkingMarkerOptions
    );
    parkingInfoWindow.open(map, parkingMarkerInit);

    window.naver.maps.Event.addListener(restaurantMarkerInit, "click", () => {
      restaurantInfoWindow.open(map, restaurantMarkerInit);
      mapRef.current?.setCenter(restaurantPosition);
      mapRef.current?.setZoom(18, true);
    });
    window.naver.maps.Event.addListener(parkingMarkerInit, "click", () => {
      parkingInfoWindow.open(map, parkingMarkerInit);
      mapRef.current?.setCenter(parkingPosition);
      mapRef.current?.setZoom(18, true);
    });
    restaurantInfo.current = restaurantInfoWindow;
    parkingInfo.current = parkingInfoWindow;
    restaurantMarker.current = restaurantMarkerInit;
    parkingMarker.current = parkingMarkerInit;
    mapRef.current = map;
  };
  useEffect(() => {
    initMap();
  }, []);

  return (
    <LocationContainer id="location_id">
      <LocationTitle>장 소</LocationTitle>
      <AddressContainer>
        <AddressTitle>돌잔치 장소</AddressTitle>
        <Address id="address">대구 수성구 동대구로 194-7 아현정</Address>
        <BtnContainer>
          <LocationBtn
            onClick={() => {
              restaurantInfo.current?.open(
                mapRef.current,
                restaurantMarker.current
              );
              mapRef.current?.setCenter(restaurantPosition);
              mapRef.current?.setZoom(18, true);
            }}
          >
            지도 이동
          </LocationBtn>
          <CopyBtn>
            <CopyToClipboard
              text={"대구 수성구 동대구로 194-7 아현정"}
              onCopy={() => alert("복사완료!")}
            >
              <span>주소 복사</span>
            </CopyToClipboard>
          </CopyBtn>
        </BtnContainer>
      </AddressContainer>
      <AddressContainer>
        <AddressTitle>주차 장소</AddressTitle>
        <Address id="address">
          <div>대구 수성구 황금동 637-1</div>
          <div>※ 2시간 무료 주차권 증정</div>
        </Address>
        <BtnContainer>
          <LocationBtn
            onClick={() => {
              parkingInfo.current?.open(mapRef.current, parkingMarker.current);

              mapRef.current?.setCenter(parkingPosition);
              mapRef.current?.setZoom(18, true);
            }}
          >
            지도 이동
          </LocationBtn>
          <CopyBtn>
            <CopyToClipboard
              text={"대구 수성구 황금동 637-1"}
              onCopy={() => alert("복사완료!")}
            >
              <span>주소 복사</span>
            </CopyToClipboard>
          </CopyBtn>
        </BtnContainer>
      </AddressContainer>
      <MapContainer>
        <MapTitle>지 도</MapTitle>
        <Map id="map"></Map>
      </MapContainer>
    </LocationContainer>
  );
}
