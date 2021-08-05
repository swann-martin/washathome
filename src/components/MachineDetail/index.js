import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Options from '../../containers/Options';
import Connect from '../../containers/Connect';
import './styles.scss';

const MachineDetail = ({
  machine,
  handleBookingsFormSubmit,
  changeField,
  changeSelect,
  dispo,
  isConnected,
}) => {
  useEffect(() => { }, []);
  const position = { lat: machine.latitude, lng: machine.longitude };
  const history = useHistory();

  return (

    !isConnected ? <Connect /> :
      (
        <div className="machinedetail">
          <h2 className="machinedetail-title"> Infos de reservation</h2>
          <Link
            to="/"
            className="machinedetail-btn--close"
            title="retour à la page précédente"
            onClick={() => {
              console.log('fermer le composant');
            }}
          ><i className="fas fa-arrow-circle-left" />
          </Link>

          <div className="machinedetail-container-top">
            <div className="machinedetail-container-top-infos">
              <div className="machinedetail-container-top-infos-details">
                <h2 className="machinedetail-container-top-infos-details-title">{machine.name}</h2>
                <img className="machinedetail-container-top-infos-details-picture" src={machine.picture} alt={machine.name} />
                <p className="machinedetail-container-top-infos-details-capacity">Capacité : <span className="machinedetail-container-top-infos-details-capacity-number">{machine.capacity}</span>kg</p>
              </div>
            </div>

            <div className="machinedetail-container-top-user">
              <p className="machinedetail-container-top-user-description">"{machine.description}"</p>
            </div>

          </div>

          <div className="machinedetail-container-bottom">
            <div className="machinedetail-container-bottom-left">
              <h3 className="machinedetail-container-bottom-left-address-city">{machine.city}</h3>
              <p className="machinedetail-container-bottom-left-address-address">{machine.address}</p>
              <p className="machinedetail-container-bottom-left-address-zipcode">{machine.zip_code}</p>
              <MapContainer className="machinedetail-container-bottom-left-address-map" center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <h3 className="machinedetail-container-bottom-left-address-map-popup-title">{machine.name}</h3>
                    <img className="machinedetail-container-bottom-left-address-map-popup-picture" src={machine.picture} alt={machine.name} />
                    <p className="machinedetail-container-bottom-left-address-map-popup-city">{machine.city}
                      <span className="machinedetail-container-bottom-left-address-map-popup-price">{machine.price}€</span>
                    </p>

                    <p className="machinedetail-container-bottom-left-address-map-popup-description">{machine.description}</p>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <form className="machinedetail-form" onSubmit={handleBookingsFormSubmit}>
              <select className="machinedetail-form-select" id="temperature-select" name="temperature" onChange={changeSelect}>
                <option className="machinedetail-form-select-temperature" value="30">Température de lavage : 30°c</option>
                <option className="machinedetail-form-select-temperature" value="20">20°</option>
                <option className="machinedetail-form-select-temperature" value="40">40°</option>
                <option className="machinedetail-form-select-temperature" value="60">60°</option>
              </select>

              <div className="machinedetail-form-options">
                <Options />
              </div>
              <textarea className="addwasherform-form-input addwasherform-form-input--description" placeholder="Ecrivez ici vos disponibilités ex : Je souhaite vous déposer mon linge, lundi matin prochain à 8h30" name="dispo" onChange={changeField} value={dispo} />
              <button className="machinedetail-form-submit" type="submit">Reserver</button>
            </form>
          </div>
        </div>
      )

  );
};

MachineDetail.propTypes = {
  machine: PropTypes.shape({
    city: PropTypes.string,
    zip_code: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    name: PropTypes.string,
    capacity: PropTypes.number,
    price: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  handleBookingsFormSubmit: PropTypes.func,
  changeField: PropTypes.func,
  changeSelect: PropTypes.func,
  dispo: PropTypes.string,
  isConnected: PropTypes.bool,
};

MachineDetail.defaultProps = {
  handleBookingsFormSubmit: () => { },
  machine: [],
  changeField: () => { },
  changeSelect: () => { },
  dispo: '',
  isConnected: false,
};

export default MachineDetail;
