/* eslint-disable react/prop-types */
import { useState } from "react";

export default function UpdateForm({productToUpdate, updateProduct, colors, collections, categories}){
  const [newColors, setNewColors] = useState([]);
  const [newCollections, setNewCollections] = useState([]);
  const [newCategories, setNewCategories] = useState([]);

  const handleChangeColor = (event, color)=>{
    try {
      if(event.target.checked){
        setNewColors([...newColors, color])
      }else{
        newColors.splice([newColors.indexOf(color)], 1);
        setNewColors([...newColors]);
      }
    } catch (error) {
      console.error("error adding color:", error)
    }
  }

  const handleChangeCategory = (event, category)=>{
    try {
      if(event.target.checked){
        setNewCategories([...newCategories, category])
      }else{
        newCategories.splice([newCategories.indexOf(category)], 1);
        setNewCategories([...newCategories]);
      }
    } catch (error) {
      console.error("error adding category:", error)
    }
  }

  const handleChangeCollection = (event, collection)=>{
    try {
      if(event.target.checked){
        setNewCollections([...newCollections, collection])
      }else{
        newCollections.splice([newCollections.indexOf(collection)], 1);
        setNewCollections([...newCollections]);
      }
    } catch (error) {
      console.error("error adding collection:", error)
    }
  }

      const handleSubmit = (event)=> {
        event.preventDefault();

          const product = {
          ID: productToUpdate.ID,
          Name: document.querySelector("#update-product-form").productName.value,
          Price: document.querySelector("#update-product-form").productPrice.value,
          Description: document.querySelector("#update-product-form").productDescription.value,
          colors: newColors,
          collections: newCollections,
          categories: newCategories
          }
          
        updateProduct(product);
      }


    return(
        <div className="modal" id="update-modal" tabIndex="-1" aria-labelledby="update-modal" aria-hidden="true" data-bs-keyboard="false">
        <div className="modal-dialog modal-fullscreen" >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="update-modal-label">Update {productToUpdate.Name} ({productToUpdate.ID})</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body mx-auto">
            <form id="update-product-form" className="row mx-auto"  onSubmit={(event)=>handleSubmit(event)}>
                <div className="col-md-5">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" defaultValue={productToUpdate.Name}/>
                </div>
                <div className="col-md-5">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="text" className="form-control" id="productPrice" defaultValue={productToUpdate.Price}/>
                </div>
                <div className="col-10">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="productDescription" rows="6" defaultValue={productToUpdate.Description}/>
                </div>
                
                <div className="row g-3">
                <fieldset className="col-2">
                  <legend>
                    Collection
                  </legend>
                      {collections.map((collection)=>(
                        <div className="form-check form-check" key={collection.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id="update-collections" onChange={(event)=>handleChangeCollection(event, collection.ID)}/>
                        <label className="form-check-label" htmlFor="update-collections">
                         {collection.Name}
                        </label>
                        </div>
                        ))}                    
                </fieldset>
                <fieldset className="col-2">
                <legend>
                    Colors
                  </legend>
                      {colors.map((color)=>(
                        <div className="form-check form-check" key={color.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id={"checkbox-"+color.Name} onChange={(event)=>handleChangeColor(event, color.ID)}/>
                        <label className="form-check-label" htmlFor={"checkbox-"+color.Name}>
                         {color.Name}
                        </label>
                        </div>
                        ))}                  
                </fieldset>
                <fieldset className="col-2">
                <legend>
                    Categories
                  </legend>
                      {categories.map((category)=>(
                        <div className="form-check form-check" key={category.ID+"checkbox"}>
                        <input className="form-check-input" type="checkbox" id={"checkbox-"+category.Name} onChange={(event)=>handleChangeCategory(event, category.ID)}/>
                        <label className="form-check-label" htmlFor={"checkbox-"+category.Name}>
                         {category.Name}
                        </label>
                        </div>
                        ))}                  
                </fieldset>

                </div>
                <div className="col-10">
                    <button type="submit" className="btn btn-primary">Update product</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}