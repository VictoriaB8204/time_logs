<!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#billGenerationModal">
    Выставить счета
</button>

<!-- Modal -->
<div class="modal fade" id="billGenerationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="#" id="billGenerationForm">
                    <div class="form-group m-1">
                        <label for="bill_date">Дата выставления счета</label>
                        <input type="date" class="form-control" id="bill_date" name="bill_date">
                    </div>
                    <div class="form-group m-1">
                        <label for="bill_number">Номер счета</label>
                        <input type="number" class="form-control" id="bill_number" name="bill_number">
                    </div>

                    <div class="m-1">
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
                    <div class="form-group m-1">
                        <label for="bill_summ">Сумма к оплате</label>
                        <input type="number" class="form-control" id="bill_summ" name="bill_summ">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="generate_invoice">Счет</button>
                <button type="button" class="btn btn-primary" id="generate_act">Акт</button>
            </div>
        </div>
    </div>
</div>
