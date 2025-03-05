
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PeopleResponse } from '../types/peopleResponse';

export const usePeopleApi = () => {
    const [data, setData] = useState<PeopleResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<PeopleResponse[]>([]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<{ results: PeopleResponse[] }>('https://randomuser.me/api/');
            const userData = response.data.results[0];
            setData(userData);
            setHistory((prevHistory) => [...prevHistory, userData]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, fetchData, history };
};


/*
'use cliente';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {PeopleResponse} from '../types/peopleResponse';

export const usePeopleApi = () => {
    const [data, setData] = useState<PeopleResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<PeopleResponse[]>([]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<PeopleResponse>('https://randomuser.me/api/');
            setData(response.data);
            setHistory((prevHistory) => [...prevHistory, response.data]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
        setLoading(false);
    }
};
 

*/