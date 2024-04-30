<script>
    export let type
    export let price 
</script>

   <div class="serviceCard">
        <div class="lineItem">
            <div class="type">{type}</div>
            <div class="price">{price}</div>
        </div>
   </div>

<style> 
   .serviceCard{
   }
   .lineItem{
    color:white;
    display:grid;
    grid-template-columns: 2.5fr .5fr;
    padding-left:1rem;
    margin-bottom: 1rem;
    margin-right:1rem
   }
  
</style>
