<script setup>
import { ref } from 'vue';
import anime from 'animejs/lib/anime.es';

const submitBtn = ref(null)

function sendMessage(){
    let tl = anime.timeline()
    tl.add({
        targets: submitBtn.value,
        translateX: [0, -100],
        duration: 300,
        easing: 'easeOutSine',
    })
    .add({
        targets: submitBtn.value,
        translateX: [-100, 1000],
        scale: [1, 0],
        skew: {
            duration: 50,
            value: 50
        },
        opacity: [1, 0],
        duration: 500,
        easing: 'easeOutSine',
    })
    .add({
        targets: submitBtn.value,
        translateX: [0,0],
        scale: [1,1],
        skew: [0,0],
        opacity: [0,1],
        duration: 1500,
        delay: 2000
    })
}

</script>

<template>
    <section id="contact">
        <div data-aos="fade-up" class="sectionTitle">
			<span class="sectionNumber">03</span>
			<h3>contact</h3>
			<p>Dont be a stranger, reach out!</p>
		</div>
        <form @submit.prevent="sendMessage()">
            <div class="smallFields">
                <div data-aos="fade-up" data-aos-delay="100" class="standardField">
                    <input type="text" placeholder="Your name">
                </div>
                <div data-aos="fade-up" data-aos-delay="200" class="standardField">
                    <input type="email" placeholder="Your email">
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" class="standardField textAreaField">
                <textarea placeholder="Your message"></textarea>
            </div>
            <div class="aosDiv" data-aos="fade-up" data-aos-anchor=".textAreaField" data-aos-delay="400">
                <button ref="submitBtn">Send Message</button>
            </div>
        </form>
    </section>
</template>