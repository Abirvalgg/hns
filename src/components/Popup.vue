<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">
            Добавить нового студента?
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>контент карточки добавления</h2>
            </v-card-title>
            <v-card-text>
                <v-form ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                    <v-menu>
                        <v-text-field readonly="true" :value="formattedDate" slot="activator" label="День рождения" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="dob"></v-date-picker>
                    </v-menu>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click="submit">Добавить</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>


<script>
import format from 'date-fns/format'
export default {
    data() {
        return {
            title: '',
            content: '',
            dob: null,
            inputRules: [
                v => v.length >= 3 || 'Ой ой'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                console.log(this.title, this.content, this.dob)
            }
        }
    },
    computed: {
        formattedDate() {
            return this.dob ? format(this.dob, 'Do MMM YYYY') : ''
        }
    }
}
</script>
