<template>
    <section class="row">
        <div class="col-12">
            <img
                src="../assets/images/04.svg"
                alt="grey background"
                class="img-fluid d-none d-md-block"
            >
            <div class="text col-12">
                <h2>Join closers now to grow your sales team</h2>
                <button class="btn btn-orange px-4">Request to join</button>
            </div>
        </div>
    </section>
</template>


<script>
export default {};
</script>

<style lang='scss' scoped>
section.row {
    padding-top: 100px;
    padding-bottom: 100px;
    .text {
        display: inline-flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #777;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: 992px) {
            flex-wrap: wrap;
        }
        h2 {
            font-size: 25px;
            @media screen and (max-width: 992px) {
                text-align: center;
                width: 100%;
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
}
</style>