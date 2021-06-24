import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';


const UserProducts = (props :any) => {

    const userProds = useSelector((state :any) => state.products.userProducts)
    return <FlatList 
    data={userProds} keyExtractor={item => item.id} 
    renderItem={(itemData) => <ProductCard 
                                itemData={itemData.item}
                                
                                />}/>
}

export default UserProducts