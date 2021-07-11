import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PlantingForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.planting?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.planting?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="datePlanted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date planted
        </Label>
        <DatetimeLocalField
          name="datePlanted"
          defaultValue={formatDatetime(props.planting?.datePlanted)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="datePlanted" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>
        <TextField
          name="notes"
          defaultValue={props.planting?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="isSuccession"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is succession
        </Label>
        <CheckboxField
          name="isSuccession"
          defaultChecked={props.planting?.isSuccession}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="isSuccession" className="rw-field-error" />

        <Label
          name="successionPeriod"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Succession period
        </Label>
        <NumberField
          name="successionPeriod"
          defaultValue={props.planting?.successionPeriod}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="successionPeriod" className="rw-field-error" />

        <Label
          name="plantVarietyId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Plant variety id
        </Label>
        <TextField
          name="plantVarietyId"
          defaultValue={props.planting?.plantVarietyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="plantVarietyId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlantingForm
