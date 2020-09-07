import React, {useEffect, useState} from "react";
import moment from 'moment';
import {connect} from 'react-redux'
import Checkbox from "@material-ui/core/Checkbox";

import './style.css'
import HeaderOfScreens from "../../components/HeaderOfScreens";
import {selectTickets} from "../../redux/selectors/tickets";
import {getTickets} from "../../redux/actions/tickets";
import Button from "../../components/Button";

function AirplaneTickets ({tickets, getTickets}) {

    const [isFromCheap, setFromCheap] = useState(true)
    const [checkbox, setCheckbox] = useState('all')
    const [ticketsForView, setTicketsForView] = useState(tickets)

    useEffect(() => {
        setTicketsForView(tickets)
    }, [tickets])

    // console.log('ticketsForView', ticketsForView)

    if (isFromCheap) {
        ticketsForView.sort((a, b) => a.price - b.price)
    } else {
        ticketsForView.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + a.segments[1].duration))
    }

    const changeSortItem = () => {
        setFromCheap(isFromCheap => !isFromCheap)
    }

    const updateNonTransfer = () => {
        const notTransfer = tickets.filter((el) => (el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0))
        setTicketsForView(notTransfer)
        setCheckbox('none')
    }
    const updateOneTransfer = () => {
        const oneTransfer = tickets.filter((el) => (el.segments[0].stops.length === 1 && el.segments[1].stops.length === 1))
        setTicketsForView(oneTransfer)
        setCheckbox('one')
    }
    const updateTwoTransfer = () => {
        const twoTransfers = tickets.filter((el) => (el.segments[0].stops.length === 2 && el.segments[1].stops.length === 2))
        setTicketsForView(twoTransfers)
        setCheckbox('two')
    }
    const updateThreeTransfer = () => {
        const threeTransfers = tickets.filter((el) => (el.segments[0].stops.length === 3 && el.segments[1].stops.length === 3))
        setTicketsForView(threeTransfers)
        setCheckbox('three')
    }
    const updateAllTickets = () => {
        setTicketsForView(tickets)
        setCheckbox('all')
    }

    return (
        <>
            <HeaderOfScreens title={'Airplane Tickets'}/>
            <Button onClick={getTickets} title={'Загрузить билеты'} titleColor={'white'} color={'blue'}/>
            <div className='airplaneTicketsContainer'>
                <div className='menuContainer'>
                    <div className='menuItem'>
                        <Checkbox checked={checkbox === 'all'} onClick={updateAllTickets}/>
                        <span>Все</span>
                    </div>
                    <div className='menuItem'>
                        <Checkbox checked={checkbox === 'none'} onClick={updateNonTransfer}/>
                        <span>Без пересадок</span>
                    </div>
                    <div className='menuItem'>
                        <Checkbox checked={checkbox === 'one'} onClick={updateOneTransfer}/>
                        <span>1 пересадка</span>
                    </div>
                    <div className='menuItem'>
                        <Checkbox checked={checkbox === 'two'} onClick={updateTwoTransfer}/>
                        <span>2 пересадки</span>
                    </div>
                    <div className='menuItem'>
                        <Checkbox checked={checkbox === 'three'} onClick={updateThreeTransfer}/>
                        <span>3 пересадки</span>
                    </div>
                </div>
                <div className='ticketsContainer'>
                    <div className='buttonTicketContainer'>
                        <span onClick={changeSortItem} className={isFromCheap ? 'activeBtn' : 'notActiveBtn'}>Самый дешевый</span>
                        <span onClick={changeSortItem} className={!isFromCheap ? 'activeBtn' : 'notActiveBtn'}>Самый быстрый</span>
                    </div>
                    {ticketsForView.map(({price, carrier, segments}, i) => (
                        <div className='ticket' key={i}>
                            <div className='priceCompanyTicketInfo'>
                                <span>{price} ₽</span>
                                <span>Company {carrier}</span>
                            </div>
                            <div className='fullInformationTicket'>
                                <div className='informationTicket bigContainer'>
                                    <span>{segments[0].origin} - {segments[0].destination}</span>
                                    <span>{moment.utc(segments[0].date).format('LT')} - {moment(Date.parse(segments[0].date) + segments[0].duration * 60000).format('LT')}</span>
                                </div>
                                <div className='informationTicket smallContainer'>
                                    <span>Время в пути</span>
                                    <span>{Math.trunc(segments[0].duration / 60)}ч. {segments[0].duration % 60}м.</span>
                                </div>
                                <div className='informationTicket smallContainer'>
                                    <span>{segments[0].stops.length} пересад{
                                        segments[0].stops.length === 0 ? 'ок' :
                                            segments[0].stops.length === 1 ? 'ка' : 'ки'
                                    }</span>
                                    {segments[0].stops.length > 0 && <span>
                                        {segments[0].stops.map(el => (
                                            <span key={el}>{el}{' '}</span>
                                        ))}
                                    </span>}
                                </div>
                            </div>
                            <div className='fullInformationTicket'>
                                <div className='informationTicket bigContainer'>
                                    <span>{segments[1].origin} - {segments[1].destination}</span>
                                    <span>{moment.utc(segments[1].date).format('LT')} - {moment(Date.parse(segments[1].date) + segments[0].duration * 60000).format('LT')}</span>
                                </div>
                                <div className='informationTicket smallContainer'>
                                    <span>Время в пути</span>
                                    <span>{Math.trunc(segments[1].duration / 60)}ч. {segments[1].duration % 60}м.</span>
                                </div>
                                <div className='informationTicket smallContainer'>
                                    <span>{segments[1].stops.length} пересад{
                                        segments[1].stops.length === 0 ? 'ок' :
                                            segments[1].stops.length === 1 ? 'ка' : 'ки'
                                    }</span>
                                    {segments[1].stops.length > 0 && <span>
                                        {segments[1].stops.map(el => (
                                            <span key={el}>{el}{' '}</span>
                                        ))}
                                    </span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    tickets: selectTickets(state)
})

const mapDispatchToProps = {
    getTickets,
}

export default connect(mapStateToProps, mapDispatchToProps)(AirplaneTickets)