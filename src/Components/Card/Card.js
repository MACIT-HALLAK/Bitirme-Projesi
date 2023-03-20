import React from 'react'
import './Card.css'
import book_img from '../../Assets/images/si1.webp';

const Card = () => {
  return (
    
    <div className='card-container'>
        <img className="book-img" src={book_img} alt="" />
        <img className="writer-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABAlJREFUaEPtWEloFEEUfdVd3Wo0RmOMy5AoxoSY4HIQEcWDehBB3EBxwQU3AiqCiksEEXFBUA8uEEFEUXE5uKF4EL0FvLkcwpCYGMbEuJEoUSeZXkpqunvGdCax090Oo3SfkumqX//9//7/r5pUI8rwHzwkAJJhWQwykmEJQZCRICN/KQIBtf5SYF2bJS/KOtjPmn9/uJOWcypr2Ka4jkQmbBw8SwCJNuisbpWC9ud6Jvjkyoe8VSKIFmWs6bCKpuOqKyOZsKnwCAVhjLHWBzrCi2KZ4JMrH8Zflgwg0TDD62md0Nr7ZidnjgBupF8BSWxsr9ZRMz/Wq63iaxKGrxQBwdgWa2Ko36Kg7bE7ek+slg0gsWaGurUKvj3ru6HQPoqCgxTCAMMppgAtZ1U07kpNVft67QcQqVTQckbrWxTN1QNKCCY8MoHwTDRsVfD5qjtjJbck5C0TATMxsfcM9Zu6R9ieQaYBX65rqFvnvmsOWyaiqMqsEe078HaHgk+X3AHJKiMouS0jqzxJMZ7d8OIkxcRsoPSOjJy5QgLwj1cMtctjiNa6n2OcDaFKEwiLAc0nVEQOuu9cIytEFB6noEMMMHoH8P60isgBw2bhMYrQLgoiG5xQPjHUV6hovesueBYPiy5IGLFZNGrEDyDccPEVCXmrRRDROKbzHcOb9QrEHBJPv5SfGqSr4jA3lT+TkTNb8BcILzxOsYGTTYoxoO2RDmkkMGiq2aIY8PWJjpp5/rT70vsysmcQf4HwIOWtEDHuPAXNNcHwRsj/NP/tqGPx2vFb3/lKLYsiY09RjNpOQaSupFG/MkT2q/hQ5a0uUlExDsRr17IbTtWheKv9fEXDm43uW21vtWQA8ThHUh1Q+kBG7oJkqwUDWh/qCC/0pzbsZ3qe7KlAFByiCO2lEPp3fctbMm/z7w65b/M9ZSUOhBfey/JOL10wsbeb/rJUj0+6yu4kH8ZZU8z265f67VYbDPj21ECSmOjmb+GlvQtLJ1G1hiHviETvZMzrVLcOLTxKMXpnklKWquXviy5KkEcbPTg+gE+piFR6o1hoDwWnMRespKNRZ7UrvN8Qh84XujibDomSPV1AyU0J/cYQkI+XVcZlhJeHU6rssYzsmcnpzSn1O33itLsng9eQ9Ti5u/zJL34fyl8jwpevKOPOSRhRkdRYPcn43CWG5LY0F58tH6s0ePn4EVfeN2Tv337zN4gYe5KCDnXGf/vUV9sYGnerrq8QPGOc1p6+NFrRyJrU8z0k1dTnijUhIgH8fM1Qu9Kb/vIExC7be6KUHYxdWPpxU/QE5E+FmM73AZB0RtvJWUFGnEQpnWuCjKQz2k7OCjLiJErpXBNkJJ3RdnJWkBEnUUrnmv8mI78AyqBT8Q5w8SIAAAAASUVORK5CYII=" alt="" />
        <h4>hadis alkalam1</h4>
        <p>mohamad alzogbi</p>
    </div>
    
      )
}

export default Card