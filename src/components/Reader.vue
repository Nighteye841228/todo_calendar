<template>
    <section>
        <b-field>
            <b-numberinput min="0" :max="contentLen" v-model.number="getBlahNum"></b-numberinput>
        </b-field>
        <div class="section">
            <div class="container">
                <div class="box">
                    <div style="white-space:pre-wrap;" class="content contest">
                        <p v-html="cutContest[current-1]"></p>
                    </div>  
                </div>
            </div>
            <b-pagination
                :total="cutContest.length"
                v-model="current"
                :per-page="1"
                :icon-next="nextIcon"
                :icon-prev="prevIcon"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page"
            >
            </b-pagination>
        </div>     
    </section>
</template>

<script>
import { blahblahblah } from './../blah';


export default {
    name: 'Reader',
    computed: {
        cutContest() {
            let words = blahblahblah[this.getBlahNum]
                .replace(/<br\/>/g, '')
                .replace(/(.{28})/g, '$1\n');
            let little = words.replace(/((.*\n){24})/g, '');
            let wordMatch = words.match(/((.*\n){24})/g);
            wordMatch.push(little);
            return wordMatch;
        },
        contentLen () {
            return blahblahblah.length-1;
        }
    },
    data: function() {
        return {
            current: 1,
            activeTab: 0,
            getBlahNum: 0,
            activeStep: 0,
        };
    },
    methods: {}
};


</script>


<style scoped>

.modal-card-body {
  overflow: auto;
}


.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

</style>

<style>
.contest {
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    overflow: scroll;
    height: 750px;
    width: 1200px;
    color: black;
}

.contest > p {
    font-size: 26px !important;
    line-height: 1.8em;
}
</style>

// #CD9DBE
// #89D2AF