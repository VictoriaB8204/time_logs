<div class="d-flex justify-content-between align-items-center flex-wrap">
    <button class="btn p-0 dropdown-toggle text-start flex-grow-1"
            type="button" data-bs-toggle="collapse" data-bs-target="#billGenerationContainer"
            aria-expanded="true" aria-controls="billGenerationContainer"
    >
        <h3 class="d-inline-block">Генерация счетов</h3>
    </button>
</div>

<div class="collapse show mb-5" id="billGenerationContainer">
    <form action="#" id="billGenerationForm">
        <div class="d-flex justify-content-start flex-wrap mb-2">
            <div class="form-group me-3">
                <label for="bill_date">Дата выставления счета</label>
                <input type="date" class="form-control" id="bill_date" name="bill_date">
            </div>
            <div class="form-group me-3">
                <label for="bill_number">Номер счета</label>
                <input type="number" class="form-control" id="bill_number" name="bill_number">
            </div>
            <div class="form-group me-3">
                <label for="bill_summ">Сумма к оплате</label>
                <input type="number" class="form-control" id="bill_summ" name="bill_summ">
            </div>
        </div>

        <div class="me-3 mb-2">
            <span>Период оказания услуг</span>
            <div class="d-flex justify-content-start flex-wrap">
                <div class="form-group m-1 d-flex align-items-center">
                    <label class="me-1" for="bill_start_date">с</label>
                    <input type="date" class="form-control" id="bill_start_date" name="bill_start_date">
                </div>
                <div class="form-group m-1 d-flex align-items-center">
                    <label class="me-1" for="bill_end_date">по</label>
                    <input type="date" class="form-control" id="bill_end_date" name="bill_end_date">
                </div>
            </div>
        </div>
    </form>

    <button type="button" class="btn btn-primary" id="generate_invoice">Счет</button>
    <button type="button" class="btn btn-primary" id="generate_act">Акт</button>
</div>

