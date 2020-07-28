<template>
	<div class="container">
		<form v-if="!isFormSubmited">
			<div class="form-card">
				<h2 class="form-card__title">{{ currentInfo.name }}</h2>

				<div class="form-card__atribute" v-for="(v, k, j) in currentInfo.atributes" :key="j">
					<label for="infoAtribute">
						{{ v.name }}
						<span
							v-if="$v.info[currentInfoKey].atributes[k].value.required !== undefined
						"
						>*</span>:
					</label>

					<div class="form-card__input-select" v-if="v.inputType == 'select'">
						<select v-model="$v.info[currentInfoKey].atributes[k].value.$model">
							<option
								v-for="(option, k) in info[currentInfoKey].atributes[k].options"
								:key="k"
							>{{ option }}</option>
						</select>
					</div>

					<div class="form-card__input-chechboxes" v-else-if="v.inputType == 'checkbox'">
						<span v-for="(item, i) in $v.info[currentInfoKey].atributes[k].$model.items" :key="i">
							<label>{{ item }}</label>

							<input
								v-model="$v.info[currentInfoKey].atributes[k].value.$model"
								type="checkbox"
								:value="item"
							/>
						</span>
					</div>

					<div v-else class="form-card__input-text">
						<input
							v-model="$v.info[currentInfoKey].atributes[k].value.$model"
							type="text"
							name="infoAtribute"
						/>
					</div>

					<div v-if="$v.info[currentInfoKey].atributes[k].value.$error">
						<div
							class="error"
							v-if="$v.info[currentInfoKey].atributes[k].value.required === false"
						>Поле {{ v.name }} обязательно.</div>
						<div
							class="error"
							v-else-if="$v.info[currentInfoKey].atributes[k].value.numeric === false"
						>Только цифры!.</div>
						<div
							class="error"
							v-else-if="$v.info[currentInfoKey].atributes[k].value.phoneValidation === false"
						>Ровно {{ phoneNumberLength}} цифр!</div>
					</div>
				</div>
				<small class="form-card__required-fields-info">* - обязательные поля</small>
			</div>

			<div style="text-align:center;margin-top:40px;">
				<span
					v-for="step in steps"
					:key="step.id"
					class="step"
					:class="{ active: currentStep == step.id, finish: step.isValid }"
				></span>
			</div>

			<div class="btns-nav">
				<button :disabled="currentStep == 1" type="button" id="prevBtn" @click.prevent="prev()">Назад</button>
				<button type="button" id="nextBtn" @click.prevent="next()">Далее</button>
			</div>
		</form>
		<div v-else class="submitted-form">
			<h2>Форма отправлена!</h2>
			<p>Данные пользователя:</p>
			<table v-for="(infoValue, infoKey, infoIdx) in info" :key="infoIdx">
				<caption>{{ infoValue.name }}</caption>
				<tbody>
					<tr
						v-for="(atributeValue, atributeKey, atributeIdx) in infoValue.atributes"
						:key="atributeIdx"
					>
						<td>{{ atributeValue.name }}</td>
						<td>{{ atributeValue.value }}</td>
					</tr>
				</tbody>
			</table>

			<br />
		</div>
	</div>
</template>

<script>
import { required, numeric, minLength } from "vuelidate/lib/validators";

export default {
	name: "ClientForm",
	watch: {
		info: {
			handler() {
				this.steps[
					this.currentStep - 1
				].isValid = this.isCurrentInfoValid;
			},
			deep: true,
		},
	},
	computed: {
		currentInfoKey() {
			return Object.keys(this.info)[this.currentStep - 1];
		},
		currentInfo() {
			return this.info[this.currentInfoKey];
		},
		isCurrentInfoValid() {
			console.log("!1");
			const currentInfoAtributesKeys = Object.keys(
				this.currentInfo.atributes
			);
			const invalidAtributes = currentInfoAtributesKeys.reduce(
				(s, currentInfoAtributesKey) => {
					if (
						this.$v.info[this.currentInfoKey].atributes[
							currentInfoAtributesKey
						].value.$error
					) {
						s = s + 1;
					}
					return s;
				},
				0
			);
			return invalidAtributes == 0 ? true : false;
		},
	},
	validations: {
		info: {
			personal: {
				atributes: {
					firstName: {
						value: { required },
					},
					lastName: { value: { required } },
					midleName: { value: {} },
					birthDate: { value: { required } },
					phone: {
						value: {
							numeric,
							phoneValidation(value) {
								console.log("value", value[0]);
								if (
									(value.length == 1 &&
										Number(value[0]) === 7) ||
									value.length == 11
								)
									return true;
								else return false;
							},
						},
					},
					sex: { value: {} },
					clientGroup: {
						value: { required, minLength: minLength(1) },
					},
					theropist: { value: {} },
					sendSms: { value: {} },
				},
			},
			adress: {
				atributes: {
					index: { value: {} },
					country: { value: {} },
					district: { value: {} },
					city: { value: { required } },
					street: { value: {} },
					house: { value: {} },
				},
			},
			pasport: {
				atributes: {
					type: { value: { required } },
					series: { value: {} },
					number: { value: {} },
					givenBy: { value: {} },
					givenDate: { value: { required } },
				},
			},
		},
	},
	data() {
		return {
			currentStep: 1,
			stepsN: 3,
			phoneNumberLength: 11,
			isFormSubmited: false,
			steps: [
				{
					id: 1,
					isValid: false,
				},
				{
					id: 2,
					isValid: false,
				},
				{
					id: 3,
					isValid: false,
				},
			],
			info: {
				personal: {
					name: "Персональная информация",
					atributes: {
						firstName: {
							name: "Имя",
							value: "",
							inputType: "text",
						},
						lastName: {
							name: "Фамилия",
							value: "",
							inputType: "text",
						},
						midleName: {
							name: "Отчество",
							value: "",
							inputType: "text",
						},
						birthDate: {
							name: "Дата рождения",
							value: "",
							inputType: "text",
						},
						phone: {
							name: "Номер телефона",
							value: "7",
							inputType: "text",
						},
						sex: {
							name: "Пол",
							value: "",
							inputType: "text",
						},
						clientGroup: {
							name: "Группа клиентов",
							value: [],
							inputType: "checkbox",
							items: ["VIP", "Проблемные", "ОМС"],
						},
						theropist: {
							name: "Лечащий врач",
							value: "Иванов",
							options: ["Иванов", "Захаров", "Чернышева"],
							inputType: "select",
						},
						sendSms: {
							name: "Не отправлять смс",
							value: false,
							items: [""],
							inputType: "checkbox",
						},
					},
				},
				adress: {
					name: "Адрес",
					atributes: {
						index: {
							name: "Индекс",
							value: "",
							inputType: "text",
						},
						country: {
							name: "Страна",
							value: "",
							inputType: "text",
						},
						district: {
							name: "Область",
							value: "",
							inputType: "text",
						},
						city: {
							name: "Город",
							value: "",
							inputType: "text",
						},
						street: {
							name: "Улица",
							value: "",
							inputType: "text",
						},
						house: {
							name: "Дом",
							value: "",
							inputType: "text",
						},
					},
				},
				pasport: {
					name: "Паспорт",
					atributes: {
						type: {
							name: "Тип документа",
							value: "Паспорт",
							options: [
								"Паспорт",
								"Свидетельство о рождении",
								"Вод. удостоверение",
							],
							inputType: "select",
						},
						series: {
							name: "Серия",
							value: "",
							inputType: "text",
						},
						number: {
							name: "Номер",
							value: "",
							inputType: "text",
						},
						givenBy: {
							name: "Кем выдан",
							value: "",
							inputType: "text",
						},
						givenDate: {
							name: "Дата выдачи",
							value: "",
							inputType: "text",
						},
					},
				},
			},
		};
	},
	methods: {
		prev() {
			this.currentStep--;
		},
		next() {
			this.$v.$touch(); //it will validate all fields
			this.steps[this.currentStep - 1].isValid = this.isCurrentInfoValid;
			if (this.isCurrentInfoValid) {
				if (this.currentStep !== this.stepsN) {
					this.$v.$reset();
					this.currentStep++;
				} else {
					this.isFormSubmited = true;
				}
			}
		},
	},
};
</script>

<style lang="scss">
body {
	margin: 0;
}
@media screen and (min-width: 769px) {
	.container {
		width: 33%;
		margin: 0 auto;
	}
	.form-card {
		border: 1px solid black;
		padding: 10px;
		background: rgb(241, 241, 241);
	}
	.form-card__atribute {
		padding: 5px 0;
	}
	button {
		width: 25%;
	}
}

@media screen and (max-width: 768px) {
	.container {
		width: 100%;
	}
	.form-card {
		background: rgb(241, 241, 241);
	}
	.form-card__required-fields-info,
	.form-card__atribute {
		padding: 5px;
	}
	button {
		width: 50%;
	}
}

.form-card__input-text {
	width: 100%;
}

.form-card__input-chechboxes {
	padding: 10px 0;
	display: inline;
	margin-left: 5px;
}
.form-card__input-select {
	display: inline;
	margin-left: 5px;
}
input[type="text"] {
	width: 100%;
	padding: 6px 10px;
	box-sizing: border-box;
}
.btns-nav {
	display: flex;
	justify-content: flex-end;
}
button {
	background-color: #4caf50;
	color: white;
	padding: 7px 10px;
	margin: 8px 1px;
	border: none;
	cursor: pointer;
}
button:disabled {
	background: #dddddd;
}

.step {
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbbbbb;
	border: none;
	border-radius: 50%;
	display: inline-block;
	opacity: 0.5;
}

.step.active {
	opacity: 1;
}

.step.finish {
	background-color: #4caf50;
}

.error {
	padding: 10px;
	background-color: #f44336; /* Red */
	color: white;
	margin-bottom: 7px;
}
.form-card__title {
	text-align: center;
}

table {
	border-collapse: collapse;
	width: 100%;
}
thead,
table,
th,
td {
	border: 1px solid black;
}

td {
	width: 50%;
}
</style>
