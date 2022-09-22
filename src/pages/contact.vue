<template>
    <section class="w-full h-screen bg-gray-200 flex flex-col justify-center items-center">
        <h1 class="text-2xl uppercase mb-8">Get in touch!</h1>
        <form onsubmit="handleSubmit" method="post" class="flex flex-col justify-center border border-red-200 w-10/12 md:w-8/12 lg:w-1/2 p-12 rounded-lg bg-white">
            <label for="name" class="form-label">
                Name: 
            </label>
            <input type="text" name="name"/>
            <label for="email" class="form-label">
                Email:
            </label>
            <input type="email" name="email" id="email"/>
            <label for="message" class="form-label">Leave your message</label>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Leave your message here">
            </textarea>
            <button type="submit" class="px-6 py-3 text-md my-8 border border-red-400 bg-red-100">Submit</button>
        </form>
    </section>
</template>

<script>
    export default {
        components:{
            Contact: 'Contact'
        },
        methods: {
            handleSubmit(e){
                e.preventDefault()
                alert('Submitting Form', e);
            }
        }
    }
</script>

<style scoped>
    .form-label {
        color: purple;

    }
</style>