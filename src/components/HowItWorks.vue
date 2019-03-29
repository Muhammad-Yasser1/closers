<template>
    <section class="row">
        <h2 class="col-12 text-center mb-5">How it works</h2>
        <div class="col-12 row">
            <div class="col-md-4 column wow fadeInUp" data-wow-duration="1.5s">
                <img src="../assets/images/Sign up.png" class="img-fluid" alt="Sign Up">
                <h5 class="my-3">Request to join</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero fuga voluptas. Quaerat corrupti nemo in distinctio mollitia laudantium doloribus!</p>
            </div>
            <div class="col-md-4 column wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s">
                <img src="../assets/images/Match Closers.png" class="img-fluid" alt="Sign Up">
                <h5 class="my-3">Request to join</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero fuga voluptas. Quaerat corrupti nemo in distinctio mollitia laudantium doloribus!</p>
            </div>
            <div class="col-md-4 column wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
                <img src="../assets/images/Sales.png" class="img-fluid" alt="Sign Up">
                <h5 class="my-3">Request to join</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero fuga voluptas. Quaerat corrupti nemo in distinctio mollitia laudantium doloribus!</p>
            </div>
        </div>
        <div class="col-12 text-center my-5">
            <button class="btn btn-orange px-4">Request to join</button>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
section.row {
    padding-top: 100px;
    padding-bottom: 100px;
    .column {
        padding-right: 30px;
        padding-left: 30px;
        @media screen and (max-width: 992px) {
            text-align: center;
        }
        h5 {
            font-weight: 600;
            font-size: 18px;
            color: #777;
        }
        p {
            font-size: 13.5px;
            line-height: 1.7;
            font-weight: 500;
            color: #999;
        }
    }

    .btn-orange {
        background: #e9ac50;
        letter-spacing: 0.5px;
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

            box-shadow: 0 8px 40px #e9ac50;
        }
    }
}
</style>