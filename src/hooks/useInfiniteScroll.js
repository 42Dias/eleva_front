import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api, apiWithoutTenant, ip } from '../services/api';


export default function useInfiniteScroll(number){


  const [products = [], setProducts] = useState([]);

  const [loading, setLoading] = useState(false)

  const [hasMore, setHasMore] = useState(false) // feito para quando não há mais resultados para pesquisa

  

	useEffect(() => {
	setLoading(true)

	apiWithoutTenant.get(`produto/${number}`)
	.then(res => {
	   setProducts(prevProducts => {
	   		return [...new Set([...prevProducts, ...res.data])]	
	   	   })
			setLoading(false)
			setHasMore(res.data.length!==0)
			// setHasMore(true)
	}
	).catch(error => console.log(error))
	}, [number] )
	return { loading, products, hasMore }

}