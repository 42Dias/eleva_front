import React, { useState, useEffect } from 'react';
import { apiWithoutTenantAndWithToken } from '../services/api';


export default function useInfiniteScroll(number) {


	const [products = [], setProducts] = useState([]);

	const [loading, setLoading] = useState(false)

	const [hasMore, setHasMore] = useState(false) // feito para quando não há mais resultados para pesquisa



	useEffect(() => {
		setLoading(true)

		apiWithoutTenantAndWithToken.get(`produto/${number}`)
			.then(res => {
				setProducts(prevProducts => {
					return [...new Set([...prevProducts, ...res.data])]
				})
				console.log(res.data)
				setLoading(false)
				setHasMore(res.data.length !== 0)
				// setHasMore(true)
			}
			).catch(error => console.log(error))
	}, [number])
	return { loading, products, hasMore }

}