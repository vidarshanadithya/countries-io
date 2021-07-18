import React, { Fragment, useEffect } from 'react';

import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../actions/countryActions';
import map from 'lodash.map';
const CountryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const countryInfo = useSelector((state) => state.getCountry);

  const { country, loading } = countryInfo;

  useEffect(() => {
    dispatch(getCountry(match.params.name));
    // eslint-disable-next-line
  }, [match, dispatch]);

  return (
    <Row className='margin-extra'>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          {map(country, (item, key) => {
            return (
              <Fragment key={key}>
                <Row className='row-col'>
                  <Col
                    xs={24}
                    xl={12}
                    sm={24}
                    md={24}
                    lg={24}
                    className='basic-col'>
                    <div className='country-title'>{item.name}</div>
                  </Col>
                </Row>
                <Row gutter={12} className='row-col'>
                  <Col
                    xs={24}
                    xl={12}
                    sm={24}
                    md={24}
                    lg={24}
                    className='basic-col'>
                    <img
                      className='country-flag'
                      src={item.flag}
                      alt={`Flag of ${item.name}`}
                    />
                  </Col>
                  <Col
                    xs={24}
                    xl={12}
                    sm={24}
                    md={24}
                    lg={24}
                    className='additional-col'>
                    <Row className='basic-info-title'>Basic Information</Row>
                    <Row className='additional-row'>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='top-level-domain-container'>
                          <div className='title'>Top Level Domain</div>
                          <div className='top-level-domain'>
                            {map(item.topLevelDomain, (domain, key) => {
                              return <div key={key}>{domain}</div>;
                            })}
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='alpha-code-container'>
                          <div className='title'>Alpha 2 code</div>
                          <div className='alpha-code'>{item.alpha2Code}</div>
                        </div>
                      </Col>
                      <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                        <div className='alpha-code-container'>
                          <div className='title'>Alpha 3 code</div>
                          <div className='alpha-code'>{item.alpha3Code}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                        <div className='calling-code-container'>
                          <div className='title'>Calling code</div>
                          <div className='calling-code'>
                            {map(item.callingCodes, (callingCode, key) => {
                              return <div key={key}>+{callingCode}</div>;
                            })}
                          </div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                        <div className='capital-container'>
                          <div className='title'>Capital</div>
                          <div className='capital'>{item.capital}</div>
                        </div>
                      </Col>
                      <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                        <div className='region-container'>
                          <div className='title'>Region</div>
                          <div className='region'>{item.region}</div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='sub-region-container'>
                          <div className='title'>Sub-region</div>
                          <div className='sub-region'>{item.subregion}</div>
                        </div>
                      </Col>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='population-container'>
                          <div className='title'>Population</div>
                          <div className='population'>
                            {new Intl.NumberFormat().format(item.population)}
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                        <div className='demonym-container'>
                          <div className='title'>Demonym</div>
                          <div className='demonym'>{item.demonym}</div>
                        </div>
                      </Col>
                    </Row>

                    {/* lat, long */}
                    <Row>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='area-container'>
                          <div className='title'>Area</div>
                          {new Intl.NumberFormat().format(item.area)}
                        </div>
                      </Col>
                      <Col xs={12} xl={8} sm={8} md={8} lg={8}>
                        <div className='gini-container'>
                          <div className='title'>Gini</div>
                          <div className='gini'>{item.gini}</div>
                        </div>
                      </Col>
                      <Col xs={24} xl={8} sm={8} md={8} lg={8}>
                        <div className='numeric-code-container'>
                          <div className='title'>Numeric Code</div>
                          <div className='numeric_code'>{item.numericCode}</div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='more-info-title'>More Information</Row>
                <Row className='row-col'>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='alt-spellings-container'>
                      <div className='title'>Alternate Spellings</div>
                      {map(item.altSpellings, (altSpelling, key) => {
                        return (
                          <div className='alt-spelling' key={key}>
                            {altSpelling}
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='timezones-container'>
                      <div className='title'>Timezones</div>
                      <div className='timezones'>
                        <Row className='row-col'>
                          {map(item.timezones, (timezone, key) => {
                            return (
                              <Col key={key} xs={8} xl={8} sm={8} md={8} lg={8}>
                                {timezone}
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='borders-container'>
                      <div className='title'>Borders</div>
                      <div className='borders'>
                        <Row className='row-col'>
                          {map(item.borders, (border, key) => {
                            return (
                              <Col
                                className={key}
                                xs={8}
                                xl={8}
                                sm={8}
                                md={8}
                                lg={8}>
                                {border}
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={6} sm={24} md={24} lg={12}>
                    <div className='currencies-container'>
                      <div className='title'>Currency</div>
                      <div className='currency'>
                        {map(item.currencies, (currency, key) => {
                          return (
                            <Row key={key} className='row-col'>
                              <Col xs={6} xl={6} sm={8} md={8} lg={8}>
                                {currency.code}
                              </Col>
                              <Col xs={8} xl={12} sm={8} md={8} lg={8}>
                                {currency.name}
                              </Col>
                              <Col xs={6} xl={6} sm={8} md={8} lg={8}>
                                {currency.symbol}
                              </Col>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='row-col'>
                  <Col xs={24} xl={8} sm={24} md={24} lg={12}>
                    <div className='languages-container'>
                      <div className='title'>Languages</div>
                      <div className='languages'>
                        <Row className='row-col'>
                          {map(item.languages, (language, key) => {
                            return (
                              <Fragment key={key}>
                                <Col xs={4} xl={4} sm={4} md={4} lg={4}>
                                  {language.iso639_1}
                                </Col>
                                <Col xs={4} xl={4} sm={4} md={4} lg={4}>
                                  {language.iso639_2}
                                </Col>
                                <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                  {language.name}
                                </Col>
                                <Col xs={8} xl={8} sm={8} md={8} lg={8}>
                                  {language.nativeName}
                                </Col>
                              </Fragment>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={12}>
                    <div className='translations-container'>
                      <div className='title'>Translations</div>
                      <div className='translations'>
                        <Row className='row-col'>
                          {map(Object.entries(item.translations), (i, key) => {
                            return (
                              <Col
                                key={key}
                                xs={12}
                                xl={12}
                                sm={12}
                                md={12}
                                lg={12}>
                                <div>{i}</div>
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} xl={8} sm={24} md={24} lg={24}>
                    <div className='regional-blocks-container'>
                      <div className='title'>Regional blocks</div>
                      <div className='regional-blocks'>
                        {map(item.regionalBlocs, (block, key) => {
                          return (
                            <Row key={key} className='row-col'>
                              <Row className='row-col'>{block.acronym}</Row>
                              <Row className='row-col'>{block.name}</Row>
                              <Row>{block.otherAcronyms}</Row>
                              {map(block.otherNames, (otherName, key) => {
                                return (
                                  <Row key={key} className='row-col'>
                                    {otherName}
                                  </Row>
                                );
                              })}
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className='basic-info-title'>Geographical Location</Row>
                <Row className='row-col'>
                  <Map
                    className='map'
                    center={[item.latlng[0], item.latlng[1]]}
                    zoom={3}
                    style={{ height: 500, width: '100%' }}>
                    <TileLayer
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      noWrap={true}
                    />

                    <Marker
                      key={item.name}
                      riseOnHover={true}
                      position={[item.latlng[0], item.latlng[1]]}>
                      <Tooltip className='map-tooltip' permanent>
                        Click to see more details
                      </Tooltip>
                      <Popup
                        maxWidth='max-content'
                        position={[item.latlng[0], item.latlng[1]]}>
                        <div className='pop-up'>
                          <div className='pop-up-title'>{item.name}</div>
                          <div className='pop-up-population-title'>
                            Population
                          </div>
                          <div className='pop-up-population'>
                            {new Intl.NumberFormat().format(item.population)}
                          </div>
                          <div className='pop-up-area-title'>Area</div>

                          <div className='pop-up-area'>
                            {new Intl.NumberFormat().format(item.area)}
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  </Map>
                </Row>
              </Fragment>
            );
          })}
        </>
      )}
    </Row>
  );
};

export default CountryScreen;
