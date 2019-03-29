<template>
    <nav class="navbar navbar-expand-md navbar-light bg-transparent py-4">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/images/horizontal.png" class="img-fluid" alt="closers logo">
            </a>
            <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main-navbar">
                <ul
                    class="navbar-nav ml-auto mt-2 mt-lg-0 justify-content-between justify-content-sm-around"
                >
                    <li class="nav-item">
                        <a class="nav-link" href="#">Post an opportunity</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Request to join</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.navbar-nav {
    width: 50%;
    @media screen and (max-width: 1100px) {
        width: 75%;
    }
    .nav-item {
        .nav-link {
            font-size: 15px;
            font-weight: 600;
            color: #000;
        }
    }
}
</style>