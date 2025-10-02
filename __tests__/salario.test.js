import { describe, it, expect } from '@jest/globals'
import ServiceExercicio from '../src/services/exercicios'

describe('Testando função multiplicar',  () => {

    it('Multiplicando dois número positivos', () => {
        const resultado = ServiceExercicio.Salario(2, 2)

        expect (resultado).toBe(4)
    })

     it('Multiplicando dois número negativos', () => {
        const resultado = ServiceExercicio.Salario(-1, -2)

        expect (resultado).toBe(2)
    })
     it('Multiplicando dois número com casa decimal', () => {
        const resultado = ServiceExercicio.Salario(1.5, 1)

        expect (resultado).toBe(1.5)
    })

     it('Multiplicando zero com outro número', () => {
        const resultado = ServiceExercicio.Salario(0, 2)

        expect (resultado).toBe(0)
    })
    
     it('Multiplicando um número com zero', () => {
        const resultado = ServiceExercicio.Salario(1, 0)

        expect (resultado).toBe(0)
    })
} )