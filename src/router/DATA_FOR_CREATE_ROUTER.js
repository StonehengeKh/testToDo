import HomePage from '../screens/HomePage'
import Post from '../screens/Post'
import Hooks from "../screens/Hooks";
import Covid from '../screens/Covid';
import Weather from "../screens/Weather";
import Blockchain from '../screens/Blockchain';
import CurrenciesOfUkraine from '../screens/CurrenciesOfUkraine';
import News from '../screens/News';
import DogVsCats from '../screens/DogVsCat';
import ColorChoice from "../screens/ColorChoice"
import AirplaneTickets from "../screens/AirplaneTickets";

export const DATA_FOR_CREATE_ROUTER = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/toDo:id',
        component: Post
    },
    {
        path: '/hooks',
        component: Hooks
    },
    {
        path: '/covid-19',
        component: Covid
    },
    {
        path: '/weather',
        component: Weather
    },
    {
        path: '/blockchain',
        component: Blockchain
    },
    {
        path: '/currencies-ukraine',
        component: CurrenciesOfUkraine
    },
    {
        path: '/news-ukraine',
        component: News
    },
    {
        path: '/random-dog-cat',
        component: DogVsCats
    },
    {
        path: '/color-picker',
        component: ColorChoice
    },
    {
        path: '/airplane-tickets',
        component: AirplaneTickets
    },
]