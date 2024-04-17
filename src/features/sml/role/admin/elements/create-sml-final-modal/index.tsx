import React from 'react';
import { Modal } from 'components/custom';
import { TCreateSmlFinalProps } from 'features/sml/role/admin/elements/create-sml-final-modal/types';
import { Button } from 'components/ui';

const CreateSmlFinal = ({ onClose, ...props }: TCreateSmlFinalProps) => {
  const bla = 0;
  return (
    <Modal
      size="small"
      title="Are you sure?"
      actions={[
        <Button
          color="default"
          size="large"
          variant="contained"
          onClick={onClose}
        >
          No
        </Button>,
        <Button
          color="primary"
          size="large"
          variant="contained"
          onClick={onClose}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      SML report hasn&apos;t been created yet. Are you sure you want to create
      it? Operation cannot be undone.
    </Modal>
  );
};

export default CreateSmlFinal;
