declare module 'react-input-mask' {
    import { ComponentType } from 'react';
    
    interface InputMaskProps {
      mask: string;
      maskChar?: string | null;
      value?: string;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      // Adicione outras propriedades conforme necessário
    }
    
    const InputMask: ComponentType<InputMaskProps>;
    
    export default InputMask;
  }
  