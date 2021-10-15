import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam:'Riyan FC',
    AwayTeam:'Febriana FC',HomeScore:3,AwayScore:1,
    RefName:'Jaka',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,10),HomeTeam:'ASIS FC',
    AwayTeam:'ASES FC',HomeScore:1,AwayScore:4,
    RefName:'notin',notes:'Pertandingan kurang seru'},
    {id:3,playingDate:new Date(2021,08,10),HomeTeam:'AURA FIRE',
    AwayTeam:'GEEK FAM',HomeScore:2,AwayScore:0,
    RefName:'jasou',notes:'Pertandingan aura marah'},
    {id:4,playingDate:new Date(2021,08,10),HomeTeam:'Madrid FC',
    AwayTeam:'MU FC',HomeScore:3,AwayScore:2,
    RefName:'Dean',notes:'Pertandingan yang sengit'},
    {id:5,playingDate:new Date(2021,08,10),HomeTeam:'Riyan FC',
    AwayTeam:'Febriana FC',HomeScore:0,AwayScore:1,
    RefName:'Kamol',notes:'Pertandingan ada rusuh'},
]
export const TEAM:Team[] = [
    {id:1,name:'BTR',type:'over 30'},
    {id:2,name:'ONIC',type:'over 30'},
    {id:3,name:'RRQ',type:'over 30'},
    {id:4,name:'ALTER EGO',type:'over 30'},
    {id:5,name:'AURA',type:'over 30'},
]