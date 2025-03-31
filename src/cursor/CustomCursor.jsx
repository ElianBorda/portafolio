import React, { useEffect, useState } from 'react'
import './customcursor.css'

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Oculta el puntero por defecto
    document.body.style.cursor = 'none'

    // Actualiza la posición del cursor personalizado
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    // Funciones para manejar la delegación de eventos
    const handlePointerOver = (e) => {
      // Si el target o alguno de sus ancestros tiene la clase 'hover-target'
      if (e.target.closest('.hover-target')) {
        setIsPointer(true)
      }
    }

    const handlePointerOut = (e) => {
      // Verificamos si salimos de un elemento que tenga 'hover-target'
      if (e.target.closest('.hover-target')) {
        setIsPointer(false)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('pointerover', handlePointerOver)
    document.addEventListener('pointerout', handlePointerOut)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('pointerover', handlePointerOver)
      document.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isPointer ? 'large' : ''}`}
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        position: 'fixed',
        pointerEvents: 'none'
      }}
    ></div>
  )
}

export default CustomCursor
