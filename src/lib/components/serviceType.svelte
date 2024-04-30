<script>   
export let name;
export let description1="";
export let description2="";
export let description3=""
</script>
<div class="serviceType">
    <div class="name">{name}</div>
    <div class="description1">{description1}</div>
    <div class="description2">{description2}</div>
    <div class="description3">{description3}</div>
</div>

<style>
    .name{
        font-size: xx-large;
        color:white;
        margin-top: 2rem;
        margin-left: 2rem;
        margin-bottom: 2rem;
        font-weight: 700;
    }
    .description1{
        color:white;
        margin-left:2rem;
        margin-bottom:1rem;
    }
    .description2{
        color:white;
        margin-left:2rem;
        margin-bottom:1rem;
     }
    .description3{
        color:white;
        margin-left:2rem;
        margin-bottom:1rem;
    }
</style>