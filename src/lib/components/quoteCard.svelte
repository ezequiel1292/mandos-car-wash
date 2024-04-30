<script> 
export let type
export let price
</script>

<div class="quoteCard">
    <div class="type">{type}</div>
    <div class="price">{price}</div>
</div>

<style>
    .quoteCard{
        display:grid;
        grid-template-columns: 1.5fr .5fr;
        color:white;
        border-radius: 10px;
        background-color: rgb(69, 76, 98);
        margin-bottom: 4rem;
        padding-bottom: 6rem
    }

</style>