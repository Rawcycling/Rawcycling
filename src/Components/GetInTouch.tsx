/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactForm from "./ContactForm";
// import map from "/map.png";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const GetInTouch = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="mt-[60px] w-[100%] bg-[#F5F7FA] py-[36px] flex flex-row sm:flex-col md:flex-col items-center px-[100px] sm:px-[10px] md:px-[30px] gap-[100px]">
      <div className="h-[90vh] w-[50%] sm:w-[100%] md:w-[100%] sm:h-[50vh] md:h-[50vh]">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>

      <ContactForm />
    </div>
  );
};

export default GetInTouch;
