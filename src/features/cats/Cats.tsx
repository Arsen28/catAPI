import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    getCats,
    selectCats,
} from './catsSlice';
import styles from './cats.module.css';

type CatsParams = {
    category_id: string | null | number ;
};

export default function Cats() {
    const cats = useAppSelector(selectCats);
    const {categoryId} = useParams()
    const [page, setPage] = useState(1);
    const [category_id, setSategory_id] = useState(-1);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const params: number|undefined|string = categoryId;
        let category_id = -1;
        if (params) category_id = +params;
        dispatch(getCats({
            page: page,
            limit: 10,
            category_id
        }));
    }, []);

    const fetchMoreCats = () => {
        setPage(page + 1);
        dispatch(getCats({
            page: page + 1,
            limit: 10,
            category_id
        }));
    }

    return (
    <>
        <div>
            {
                cats.length > 0 && cats.map((cat: any) => {
                    return <div key={cat.id} className={styles.container}>
                        <img src={cat.url} className={styles.image} />
                    </div>
                })
            }
        </div>
        <button onClick={() => { fetchMoreCats() }}>Read more</button>
    </>
  );
}
