import React, { useEffect } from 'react';
import './MenuHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';

const MenuHeader = () => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    }, [])


    const showCategoryData = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>

                    {
                        category.parentId ? <a
                            href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                            {category.name}
                        </a> :
                            <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{showCategoryData(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;

    }

    return (
        <div className='menuHeader'>
            <ul>
                {category.categories.length > 0 ? showCategoryData(category.categories) : null}
            </ul>
        </div>
    );
};

export default MenuHeader;