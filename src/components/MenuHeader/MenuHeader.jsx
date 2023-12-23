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






// import React, { useEffect } from 'react';
// import './MenuHeader.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCategory } from '../../redux/actions/categoryAction';

// const MenuHeader = () => {
//     const category = useSelector(state => state.category);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllCategory());
//     }, []);

//     const showParentCategories = (categories) => {
//         return categories.map(categoryItem => (
        
//             <li key={categoryItem._id}>
//                 {categoryItem.parentId == null && categoryItem.categoryImage && (
//                     <div>
//                         <img src={categoryItem.categoryImage} alt={categoryItem.name} />
//                     </div>
//                 )}
//                 <span>{categoryItem.name}</span>
//                 {categoryItem.children.length > 0 && (
//                     <ul>{showParentCategories(categoryItem.children)}</ul>
//                 )}
//             </li>
//         ));
//     }

//     const renderCategories = () => {
//         if (category.categories.length > 0) {
//             const parentCategories = category.categories.filter(cat => !cat.parentId);
//             return showParentCategories(parentCategories);
//         }
//         return null;
//     }

//     return (
//         <div className='menuHeader'>
//             <ul>
//                 {renderCategories()}
//             </ul>
//         </div>
//     );
// };

// export default MenuHeader;







