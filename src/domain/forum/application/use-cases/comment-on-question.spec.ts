import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from 'test/factories/make-question'
import { CommentOnQuestionUseCase } from './comment-on-question'
import { InMemoryQuestionsCommentsRepository } from 'test/repositories/in-memory-questions-comments'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionsCommentsRepository: InMemoryQuestionsCommentsRepository
let sut: CommentOnQuestionUseCase

describe('Comment on Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    inMemoryQuestionsCommentsRepository =
      new InMemoryQuestionsCommentsRepository()

    sut = new CommentOnQuestionUseCase(
      inMemoryQuestionsRepository,
      inMemoryQuestionsCommentsRepository,
    )
  })

  it('should be able to comment on question', async () => {
    const question = makeQuestion()

    await inMemoryQuestionsRepository.create(question)

    await sut.execute({
      questionId: question.id.toString(),
      content: 'Comentário teste',
      authorId: question.authorId.toString(),
    })

    expect(inMemoryQuestionsCommentsRepository.items[0].content).toEqual(
      'Comentário teste',
    )
  })
})
