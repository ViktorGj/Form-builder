export interface IForms {

  payload: {
    formId: 'string',
    title: 'string',
    submissionId: 'string',
    questions: [
      {
        id: 'string',
        name: 'string',
        type: 'MultipleChoice',
        order: 0,
        answers: [
          {
            optionId: 'string',
            name: 'string',
            isSelected: true,
            text: 'string'
          }]
      }]
  };
}
