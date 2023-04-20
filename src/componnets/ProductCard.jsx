import React from "react";

function ProductCard({ data }) {
    return (
        <div class="col">
            <div class="card">
                <img src={data.images[0]} class="card-img-top" alt="..." style={{height:400}} />

                <div class="card-body">
                    <h5 class="card-title">{data.title.slice(0, 20)}</h5>
                    <p class="card-text">{data.description.slice(0, 20)}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;

