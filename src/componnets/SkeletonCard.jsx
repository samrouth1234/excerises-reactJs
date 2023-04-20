import React from 'react'
export default function SkeletonCard() {
  return (
    <div className='col'>
      <div class="card p-0" aria-hidden="true">
        <div style={{ height: 400, background: "gray" }}> </div>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
  );
}

