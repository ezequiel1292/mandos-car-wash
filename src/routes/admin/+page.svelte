<script>
export let form 

</script>


<div class="body">
    {form}
    <div class="logIn">
        <form method="post" label="logIn">
            <input class="userName"name=userName placeholder="User Name"> <br>
            <input class="password" name="password" placeholder="Password"> <br>
            <button class="logInButton">Log In</button>
       </form>
    </div>
 
</div>

<style>
    .body{
        background:rgba(3, 3, 25, 0.885);
        height:100rem
    }
    .logIn{
        display:flex;
        justify-content: center;
        align-items: center;
        padding-top: 12rem;
    }
    .userName{
        margin-bottom: 2rem;
        width: 16rem;
        height: 1.5rem;
        border-radius: 10px;
    }
    .password{
        margin-bottom: 2rem;
        width: 16rem;
        height: 1.5rem;
        border-radius: 10px;
    }
    .logInButton{
        margin-left: 7rem;
    }
</style>,