<template>
	<div>
		<div class="container-project">
			<div class="block-cover reveal-cover">
				<div class="block-cover__image">
					<img :src="require('@/assets/images/'+`${dataProject[this.id].img_cover}`)">
				</div>
			</div>
			<div class="block-description">
				<div class="block-description__intro">
					<h4>Presentation</h4>
					<p>{{dataProject[this.id].text_presentation}}</p>
					<a v-if="dataProject[this.id].discover_link != ''" :href="dataProject[this.id].discover_link" rel="noopener noreferrer" target="_blank">
						<div class="block-description__intro__discover">
							<p>{{dataProject[this.id].discover_button}}</p>
							<div class="block-description__intro__discover--line"></div>
						</div>
					</a>
					<div v-if="dataProject[this.id].discover_link === ''" class="block-description__intro__discover">
						<p>{{dataProject[this.id].discover_button}}</p>
						<div class="block-description__intro__discover--line"></div>
					</div>
				</div>
				<div class="block-description__category">
					<div class="block-description__category__section">
						<p>Date</p>
						<p>{{dataProject[this.id].date}}</p>
					</div>
					<div class="block-description__category__section">
						<p>Role</p>
						<p>{{dataProject[this.id].role}}</p>
					</div>
					<div class="block-description__category__section">
						<p>Type</p>
						<p>{{dataProject[this.id].type_of_project}}</p>
					</div>
				</div>
			</div>
			<div class="block-model reveal-img">
				<img :src="require('@/assets/images/'+`${dataProject[this.id].three_images_1}`)">
				<img :src="require('@/assets/images/'+`${dataProject[this.id].three_images_2}`)">
				<img :src="require('@/assets/images/'+`${dataProject[this.id].three_images_3}`)">
			</div>
			<div class="block-content">
				<div class="block-content__intro">
					<h4>{{dataProject[this.id].title_roadmap_word_1}}<br>{{dataProject[this.id].title_roadmap_word_2}}</h4>
					<p>{{dataProject[this.id].text_roadmap_1}}</p>
				</div>
				<div class="block-content__text">
					<p>{{dataProject[this.id].text_roadmap_2}}</p>
					<p>{{dataProject[this.id].text_roadmap_3}}</p>
				</div>
			</div>
			<div class="block-graphical-charter">
				<div class="block-graphical-charter__content">
					<div class="block-graphical-charter__content__colors">
						<h4>Colors</h4>
						<img :src="require('@/assets/images/'+`${dataProject[this.id].color}`)">
					</div>
					<div class="block-graphical-charter__content__typographies">
						<h4>Typography</h4>
						<img :src="require('@/assets/images/'+`${dataProject[this.id].font}`)">
					</div>
				</div>
			</div>
			<div class="block-quotes reveal-quote">
				<p>“{{dataProject[this.id].quote}}“</p>
			</div>
			<div class="block-conclusion">
				<div class="block-conclusion__intro">
					<h4>{{dataProject[this.id].title_conclusion_word_1}}<br>{{dataProject[this.id].title_conclusion_word_2}}</h4>
					<p>{{dataProject[this.id].text_conclusion_1}}</p>
				</div>
				<div class="block-mockup">
					<img v-if="dataProject[this.id].mockup != ''" :src="require('@/assets/images/'+`${dataProject[this.id].mockup}`)">
					<video controls v-if="dataProject[this.id].video != ''" :src="require('@/assets/images/'+`${dataProject[this.id].video}`)"/>
				</div>
			</div>
			<div class="block-next-project">
				<div class="block-next-project__button reveal-next">
					<div class="block-next-project__button--line"></div>
					<a :href="dataProject[this.id].next_page">Next</a>
				</div>
			</div>
			<footer>
				<p>Code & design by me ✨</p>
			</footer>
		</div>
	</div>
</template>

<script>
import json from '../../../json/data.json'
  export default {
    name: 'Home',
    data() {
      return {
		dataProject: json.project,
		id: 1,
      }
	},
	mounted(){

		let currentUrl = window.location.pathname;
		// console.log(currentUrl);

		if(currentUrl === "/project/portfolio"){
			this.id = 1
		}else if(currentUrl === "/project/travel_diary"){
			this.id = 0
		}else if(currentUrl === "/project/space_game"){
			this.id = 2
		}

		this.scrollTrigger()
	},
	methods: {
      scrollTrigger(){
        const ratio = .1

        const options = {
          root: null,
          rootMargin: '0px',
          threshold: .1
        }

        const handleIntersect =  function(entries, observer){
          entries.forEach(function(entry) {
            if(entry.intersectionRatio > ratio){
              entry.target.classList.add('reveal-visible')
            //   console.log('visible')
            }else{
            //   console.log('invisible')
            //   entry.target.classList.remove('reveal-visible')
            }
          })
        }

        const observer = new IntersectionObserver(handleIntersect, options)
        // observer.observe(document.querySelector('.reveal-title'))
        // observer.observe(document.querySelector('.reveal-subtitle'))
        observer.observe(document.querySelector('.reveal-cover'))
        observer.observe(document.querySelector('.reveal-img'))
        observer.observe(document.querySelector('.reveal-quote'))
        observer.observe(document.querySelector('.reveal-next'))
      }
    },
}
</script>

<style>
  @import '../../styles/reset.css';
</style>

<style>
  @import 'project.min.css';
</style>