import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import {options} from '../../../containers/OwlCarouselOptions';
import SingleCard from './SingleCard';

class RecentDonors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			donors: []
		};
	}

	componentDidMount() {
		fetch(`http://localhost:3300/donors`)
			.then((response) => response.json())
			.then((donors) => {
				if (donors[0]) {
					this.setState({ donors: donors });
				}
			})
			.catch((err) => console.log(err));
	}

    render() {
        const { donors } = this.state;
		return (
			<div className='recently-donated-donors padding-bottom-120'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8'>
							<div className='section-title margin-bottom-60'>
								<h2 className='title'>
									<NavLink to='/recent-donors'>
										Recent Donors
									</NavLink>
								</h2>
								<span className='separator'></span>
							</div>
						</div>
                    </div>
                    {!donors.length ?
                        <h1>Loading Data...</h1>
                        :
                        <div className='row'>
                            {donors[0].id === undefined ?
                                (<div className='col-lg-12'>
                                    <h1
                                        className='alert-danger'
                                        style={{
                                            textAlign: 'center',
                                            lineHeight: '6rem',
                                        }}
                                    >
                                        Sorry! No Donor Data Found!
                                    </h1>
                                </div>
                                ) : (<OwlCarousel
                                    className='recently-donated-donors-carousel owl-carousel'
                                    {...options}
                                >
                                    {Object.keys(donors).map((donor, i) => {
                                        return (
											<SingleCard
												dateConverter={
													this.props.dateConverter
												}
												key={i}
												id={donors[i].id}
												name={donors[i].name}
												blood_group={
													donors[i].blood_group
												}
												donated={donors[i].donated}
												last_donate_date={
													donors[i].last_donate_date
												}
											/>
										);
                                    })}
                                </OwlCarousel>)
                            }
                        </div>
                        }
					</div>
				</div>
		);
	}
};

export default RecentDonors;