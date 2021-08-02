<template>
    <div id="app">
        <section>
            <div class="box" style="justify-content: space-around">
                <nav class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <b-collapse :open.sync="isAddLabel" aria-id="forNewLabel">
                                <template #trigger>
                                    <b-button
                                        outlined
                                        label="新標籤"
                                        type="is-primary"
                                        aria-controls="forNewLabel"
                                    />
                                </template>
                                <div class="notification">
                                    <section class="section">
                                        <b-field label="標籤名稱">
                                            <b-input v-model="labelName"></b-input>
                                        </b-field>
                                        <b-field label="標籤icon">
                                            <b-input v-model="labelIcon"></b-input>
                                        </b-field>
                                        <b-field label="標籤顏色">
                                            <v-input-colorpicker v-model="labelColor" />
                                        </b-field>
                                        <b-field>
                                            <b-button outlined @click="addLabel">確認</b-button>
                                        </b-field>
                                    </section>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="level-item">
                            <b-collapse :open.sync="isAddTask" aria-id="forNewTask">
                                <template #trigger>
                                    <b-button
                                        outlined
                                        label="新工作"
                                        type="is-primary"
                                        aria-controls="forNewTask"
                                    />
                                </template>
                                <div class="notification">
                                    <section class="section">
                                        <b-field label="標籤">
                                            <b-select placeholder="選擇種類" expanded required v-model="taskLabel">
                                                <option
                                                    v-for="(label) in labels"
                                                    :value="label"
                                                    :key="label.name"
                                                >
                                                    {{ label.name }}
                                                </option>
                                            </b-select>
                                        </b-field>
                                        <b-field label="工作標題">
                                            <b-input v-model="taskTitle"></b-input>
                                        </b-field>
                                        <b-field label="工作說明">
                                            <b-input v-model="taskExplanation"></b-input>
                                        </b-field>
                                        <b-field label="工作日期">
                                            <b-select placeholder="選擇日期" expanded v-model.number="taskDay">
                                                <option
                                                    v-for="(i,index) in numberOfDays"
                                                    :value="index"
                                                    :key="index"
                                                >
                                                    {{ index+1 }}
                                                </option>
                                            </b-select>
                                        </b-field>
                                        <b-field><b-button outlined @click="addTask">確認</b-button></b-field>
                                    </section>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="level-item">
                            <b-button type="is-text" disabled> </b-button>
                        </div>
                        <div class="level-item">
                            <b-button
                                outlined
                                label="存檔"
                                type="is-primary"
                                @click="saveWork"
                            />
                        </div>
                        <div class="level-item">
                            <b-button
                                outlined
                                label="下載"
                                type="is-primary"
                                @click="downloadJson"
                            />
                        </div>
                        <div class="level-item">
                            <b-field class="file is-primary" :class="{'has-name': !!file}">
                                <b-upload v-model="file" class="file-label" @input="uploadJson">
                                    <span class="file-cta">
                                        <b-icon class="file-icon" icon="upload"></b-icon>
                                        <span class="file-label">上傳記錄</span>
                                    </span>
                                    <span class="file-name" v-if="file">
                                        {{ file.name }}
                                    </span>
                                </b-upload>
                            </b-field>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item" v-if="false">
                            <b-field>
                                <b-numberinput placeholder="本月開頭星期幾？" v-model.number="firstDay"></b-numberinput>
                            </b-field>
                        </div>
                        <div class="level-item" v-if="false">
                            <b-field>
                                <b-numberinput placeholder="本月有幾天？" v-model.number="numberOfDays"></b-numberinput>
                            </b-field>
                        </div>
                        <div class="level-item">
                            <b-collapse :open.sync="isDeleteLabel" aria-id="forNewTask">
                                <template #trigger>
                                    <b-button
                                        outlined
                                        label="刪除標籤"
                                        type="is-danger"
                                        aria-controls="forNewTask"
                                    />
                                </template>
                                <div class="notification">
                                    <section class="section">
                                        <b-field label="標籤">
                                            <b-select placeholder="選擇種類" expanded v-model="taskLabel">
                                                <option
                                                    v-for="(label) in labels"
                                                    :value="label"
                                                    :key="label.name"
                                                >
                                                    {{ label.name }}
                                                </option>
                                            </b-select>
                                        </b-field>
                                        <b-field><b-button outlined @click="deleteLabel">確認</b-button></b-field>
                                    </section>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="level-item">
                            <b-button type="is-danger" outlined @click="deleteCookie">刪除記錄</b-button>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="box">
                <div class="columns">
                    <div class="column has-text-centered blank" v-for="(j,index) in date" :key="index">
                        <p class="heading">
                            {{ j }}
                        </p>
                    </div>
                </div>
                <div class="columns is-multiline has-text-centered is-variable is-2">
                    <div class="column is-1 seven-col blank" v-for="(i,ind) in firstDay-1" :key="ind+'day'">
                        <div class="box" style="height:27.85rem;overflow:auto;">
                            <div class="has-text-centered content">
                                <p class="title"></p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-1 seven-col" v-for="(i,index) in numberOfDays" :key="index">
                        <div class="box" style="padding: 1.5rem 0.5rem;">
                            <div class="has-text-centered content" @dblclick="setRed(index)">
                                <p class="title" ref="dateTitle">{{ index+1 }}</p>
                            </div>
                            <child-task 
                                :date="index" 
                                :labels="labels" 
                                :numberOfDays="numberOfDays" 
                                :inheritTask="allTasks[index]"
                                @handleTransTask="handleTransTask" 
                                ref="task"
                                :key="componentKey"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Reader v-if="false" />      
    </div>
</template>

<script>
import InputColorPicker from 'vue-native-color-picker';
import Task from './components/Task';
import Reader from './components/Reader';



export default {
    name: 'App',
    components: {
        'v-input-colorpicker': InputColorPicker,
        'child-task': Task,
        Reader
    },
    created() {
        const date = new Date();
        let myStore = window.localStorage;
        date.setMonth(date.getMonth());
        date.setDate(1);
        this.firstDay = date.getDay();
        if(this.firstDay === 0) this.firstDay = 7;      
        date.setMonth(date.getMonth()+1);
        date.setDate(0);
        this.numberOfDays = date.getDate();

        if(myStore.getItem('tasks')) this.allTasks = JSON.parse(myStore.getItem('tasks'));
        if(myStore.getItem('labels')) this.labels = JSON.parse(myStore.getItem('labels'));
    },
    data: function() {
        return {
            datetime: undefined,
            isAddLabel: false,
            isAddTask: false,
            isAddSaveTime: false,
            isDeleteLabel: false,
            file: null,
            componentKey: 0,
            
            firstDay: 1,
            numberOfDays: undefined,
            taskLabel: undefined,
            taskTitle: '',
            taskExplanation: '',
            taskDay: 0,
            labelName: '',
            labelIcon: '',
            labelColor: '',
            allTasks: [],

            labels: [
                {
                    name: '寫作',
                    icon: '●',
                    color: '#CD9DBE'
                }, {
                    name: '靈感',
                    icon: '○',
                    color: '#CD9DBE'
                }, {
                    name: '閱讀',
                    icon: '▲',
                    color: '#89D2AF'
                },
            ],
            date: [
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
                '星期日',
            ],
        };
    },
    methods: {
        compareDay(days) {
            return days > 0 && days < this.numberOfDays;
        },
        setRed(val) {
            this.$refs.dateTitle[val].style.color = 
            this.$refs.dateTitle[val].style.color === 'red' ? 'black' : 'red';
        },
        handleTransTask(task) {
            this.$refs.task[task.date].setTask(task);
            this.$refs.task[task.date].confirmAdd();
        },
        addTask() {
            const task = {
                label: this.taskLabel,
                title: this.taskTitle || "",
                explanation: this.taskExplanation || "",
                date: this.taskDay
            };
            this.handleTransTask(task);
            this.isAddTask = false;
        },
        addLabel() {
            this.labels.push({
                name: this.labelName || "",
                icon: this.labelIcon || "。",
                color: this.labelColor || "#000000",
            });
            this.isAddLabel = false;
        },
        deleteLabel() {
            this.labels = this.labels.filter(({name})=>{ return name !== this.taskLabel.name;});
            this.isDeleteLabel = false;
        },
        saveWork() {
            this.allTasks = this.$refs.task.map((taskComponent)=>{
                return taskComponent.tasks;
            });
            window.localStorage.removeItem('tasks');
            window.localStorage.removeItem('labels');
            window.localStorage.setItem('tasks', JSON.stringify(this.allTasks));
            window.localStorage.setItem('labels', JSON.stringify(this.labels));
            this.isAddSaveTime = false;
        },
        deleteCookie () {
            window.localStorage.removeItem('tasks');
            window.localStorage.removeItem('labels');
        },
        downloadJson() {
            this.allTasks = this.$refs.task.map((taskComponent)=>{
                return taskComponent.tasks;
            });
            const downJson = JSON.stringify({
                tasks: JSON.stringify(this.allTasks),
                labels: JSON.stringify(this.labels)
            });
            let link = document.createElement('a');
            link.download = `存檔`;
            link.style.display = 'none';
            // 字元內容轉變成blob地址
            let blob = new Blob([downJson], {
                type: 'application/json;charset=utf-8'
            });
            link.href = URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        uploadJson: async function () {
            try {
                let data = await fileLoad(this.file);
                data = JSON.parse(data); 
                this.allTasks = JSON.parse(data.tasks);
                this.labels = JSON.parse(data.labels);
                this.componentKey += 1;
            } catch (error) {
                console.log(error);
            }
        }
    }
};

const fileLoad = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsText(file)
  })
}


</script>


<style>

@media screen and (min-width: 770px),print {
    .seven-col {
        width: 14.28571428% !important;
    }
}


@media (max-width: 760px) {
    .blank {
        display: none !important;
    }
}

</style>



// #CD9DBE
// #89D2AF