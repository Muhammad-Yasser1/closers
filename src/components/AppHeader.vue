<template>
    <header class="row">
        <div class="col-md-5 card border-0">
            <div class="card-body">
                <h1 class="card-title">Where Closers and Influencers Get Connected</h1>
                <p class="card-text">
                    Get early access to match with the top High-Ticket Closers
                    <sup
                        class="font-light"
                    >TM</sup>
                </p>
            </div>
            <div class="card-footer">
                <button class="btn card-link btn-orange px-4">Request to join</button>
                <button
                    class="btn card-link btn-black px-4 mt-0 mt-md-2 mt-xl-0 ml-2 ml-md-0 ml-xl-2"
                >Post an opportunity</button>
            </div>
        </div>
        <div class="col-md-7 pl-md-5 mt-3 mt-md-0">
            <div class="image-container mx-auto">
                <img
                    src="../assets/images/00.png"
                    class="img-fluid"
                    alt="a man shaking hand with a woman"
                >
            </div>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
header.row {
    @media screen and (max-width: 1100px) {
        padding-top: 50px;
    }
    padding-top: 100px;
    padding-bottom: 100px;
    .card-body {
        .card-title {
            font-weight: 400 !important;
            font-size: 50px;
            @media screen and(max-width: 1200px) {
                font-size: 40px;
            }
            @media screen and(max-width: 1100px) {
                font-size: 30px;
            }
            @media screen and(max-width: 1000px) {
                font-size: 25px;
            }
        }
        .card-text {
            font-size: 20px;
            color: #555;
        }
    }
    .card-footer {
        background: transparent;
        border-top: 0;
        .card-link {
            @media screen and (max-width: 1200px) and (min-width: 768px) {
                width: 100%;
            }
            padding-top: 10px;
            padding-bottom: 12px;
            border-radius: 25px;
            font-weight: 600;
            color: #fff;
            font-size: 14px;
            transition: all 0.3s;
            position: relative;
            top: 0;

            &:hover {
                top: -3px;
            }
            &.btn-orange {
                background: #e9ac50;
                letter-spacing: 0.5px;
                &:hover {
                    box-shadow: 0 8px 40px #e9ac50;
                }
            }
            &.btn-black {
                background: #303030;

                &:hover {
                    box-shadow: 0 8px 40px #303030;
                }
            }
        }
    }
}
</style>